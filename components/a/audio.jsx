import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owtb_jhsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owtb_jhsr"/>`,
		"fallback": "codex:audio",
	});
}

export default Component;

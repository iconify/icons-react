import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdf8a4bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdf8a4bjg"/>`,
		"fallback": "tabler:corner-left-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soy-c7b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soy-c7b3y"/>`,
		"fallback": "codex:h6",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej8fvvbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej8fvvbnx"/>`,
		"fallback": "noviair-light:bot-play",
	});
}

export default Component;

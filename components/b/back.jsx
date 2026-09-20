import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0tmyui_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0tmyui_p"/>`,
		"fallback": "nrk:back",
	});
}

export default Component;

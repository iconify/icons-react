import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvzo8oh1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="grid-outline"><path class="Vector uvzo8oh1p" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:grid-outline",
	});
}

export default Component;

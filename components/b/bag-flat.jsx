import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwgj39-8y.css';
import '../../css/h/hf2u96s1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dwgj39-8y"/><path clip-rule="evenodd" class="hf2u96s1e"/></g>`,
		"fallback": "streamline-color:bag-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iubb9-b0f.css';
import '../../css/m/mo-6exyaj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iubb9-b0f"/><path clip-rule="evenodd" class="mo-6exyaj"/></g>`,
		"fallback": "streamline-color:convert-pdf-2-flat",
	});
}

export default Component;

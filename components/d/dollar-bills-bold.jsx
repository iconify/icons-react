import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7my6m5ui.css';
import '../../css/u/uxo3gd9or.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n7my6m5ui"/><path class="uxo3gd9or"/></g>`,
		"fallback": "glyphs:dollar-bills-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x080svbgp.css';
import '../../css/u/uf8l0q7km.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x080svbgp"/><path class="uf8l0q7km"/></g>`,
		"fallback": "glyphs:buildings-1-duo",
	});
}

export default Component;

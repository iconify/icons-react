import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euhz29b7b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1c2pobxg.css';
import '../../css/n/n7_idhb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="euhz29b7b"/><use href="#SVGbX9rsd6P" class="cuyn6tgcc"/><path clip-rule="evenodd" class="k1c2pobxg"/><use href="#SVGbX9rsd6P" class="cuyn6tgcc"/><defs><path id="SVGbX9rsd6P" clip-rule="evenodd" class="n7_idhb2y"/></defs></g>`,
		"fallback": "solar:house-bold",
	});
}

export default Component;

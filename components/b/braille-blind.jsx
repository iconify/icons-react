import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6dt-4bwi.css';
import '../../css/u/uf5xnac0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d6dt-4bwi"/><path class="uf5xnac0z"/></g>`,
		"fallback": "streamline-color:braille-blind",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcb8zqbpp.css';
import '../../css/u/uudf2r-ks.css';
import '../../css/e/es9nxezbi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcb8zqbpp"/><path class="uudf2r-ks"/><path class="es9nxezbi"/></g>`,
		"fallback": "glyphs-poly:chevron-circle",
	});
}

export default Component;

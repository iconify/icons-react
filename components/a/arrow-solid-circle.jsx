import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcb8zqbpp.css';
import '../../css/u/uudf2r-ks.css';
import '../../css/m/mpg_vefah.css';
import '../../css/m/mum8a-ytf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcb8zqbpp"/><path class="uudf2r-ks"/><path clip-rule="evenodd" class="mpg_vefah"/><path class="mum8a-ytf"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-circle",
	});
}

export default Component;

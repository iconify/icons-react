import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en4wdebxd.css';
import '../../css/f/fux_uqjfv.css';
import '../../css/i/i_ug-dbkl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="en4wdebxd"/><path class="fux_uqjfv"/><path class="i_ug-dbkl"/></g>`,
		"fallback": "glyphs:head-side-mask-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqjy3ubut.css';
import '../../css/q/qx81u5bdj.css';
import '../../css/r/r_dyu4sco.css';
import '../../css/n/newr62bds.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y2n-rtl6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGzq4yudsC)" class="eqjy3ubut"/><path fill="url(#SVGn31uPdMB)" class="qx81u5bdj"/><defs><linearGradient id="SVGzq4yudsC" x1="2.429" x2="10.71" y1="4.25" y2="12.854" gradientUnits="userSpaceOnUse"><stop class="r_dyu4sco"/><stop offset="1" class="newr62bds"/></linearGradient><linearGradient id="SVGn31uPdMB" x1="6.125" x2="7.966" y1="5.612" y2="12.111" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y2n-rtl6f"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:add-circle-16",
	});
}

export default Component;

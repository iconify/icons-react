import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrvcoe4ke.css';
import '../../css/u/uzhnzhb4n.css';
import '../../css/i/iy2_fi8va.css';

const viewBox = {"width":301,"height":191};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zrvcoe4ke"/><path class="uzhnzhb4n"/><path class="iy2_fi8va"/></g>`,
		"fallback": "cif:ee",
	});
}

export default Component;

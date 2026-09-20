import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_xn35tda.css';
import '../../css/r/rrbyo-e_z.css';
import '../../css/x/xvpuo63jz.css';
import '../../css/z/zg_zhjrdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="h_xn35tda"/><circle class="rrbyo-e_z"/><circle class="xvpuo63jz"/><path class="zg_zhjrdr"/></g>`,
		"fallback": "meteor-icons:cassette-tape",
	});
}

export default Component;

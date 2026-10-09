import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fginnxrdt.css';
import '../../css/m/mpfbstbhm.css';
import '../../css/w/wn32g0bsf.css';
import '../../css/d/d4x_2oiju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fginnxrdt"/><path class="mpfbstbhm"/><path class="wn32g0bsf"/><path class="d4x_2oiju"/>`,
		"fallback": "energy-icons:clover-48-bold",
	});
}

export default Component;

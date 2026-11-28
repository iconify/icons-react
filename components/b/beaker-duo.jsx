import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spe6z4uip.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzv76wqmw.css';
import '../../css/x/xyj5r3ilr.css';
import '../../css/r/rpmcc2kwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary spe6z4uip"/><g class="dt0cm9dhy primary"><path class="tzv76wqmw"/><path class="xyj5r3ilr"/><path class="rpmcc2kwa"/></g>`,
		"fallback": "iconaut:beaker-duo",
	});
}

export default Component;

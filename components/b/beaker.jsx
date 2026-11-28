import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="tzv76wqmw"/><path class="xyj5r3ilr"/><path class="rpmcc2kwa"/></g>`,
		"fallback": "iconaut:beaker",
	});
}

export default Component;

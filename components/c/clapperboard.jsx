import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sy3i85blh.css';
import '../../css/a/asa8z35su.css';
import '../../css/k/kpbt8hbco.css';
import '../../css/c/c480uaccw.css';
import '../../css/l/l0d0_pkmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sy3i85blh wm-shadow"/><path class="asa8z35su wm-shadow"/><path class="kpbt8hbco"/><path class="c480uaccw"/><path class="l0d0_pkmt"/></g>`,
		"fallback": "withicons-brutal:clapperboard",
	});
}

export default Component;

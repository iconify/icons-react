import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjy3d14_j.css';
import '../../css/i/iwcskgmvs.css';
import '../../css/e/e_wos8bnc.css';
import '../../css/c/coid4cp1e.css';
import '../../css/k/khsgn_b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjy3d14_j wm-k"/><path class="iwcskgmvs wm-shine"/><path class="e_wos8bnc wm-shine"/><path class="coid4cp1e wm-shine"/><path class="khsgn_b9w wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder",
	});
}

export default Component;

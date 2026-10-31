import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlsib_bls.css';
import '../../css/n/nllfw1bvl.css';
import '../../css/a/aqxgmvb0r.css';
import '../../css/c/cvaor0ben.css';
import '../../css/k/kdswjob0j.css';
import '../../css/y/y_s8u1brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlsib_bls wm-k"/><path class="nllfw1bvl wm-deco"/><path class="aqxgmvb0r wm-k"/><path class="cvaor0ben wm-k"/><path class="kdswjob0j wm-shadow"/><path class="wm-shine y_s8u1brt"/></g>`,
		"fallback": "withicons-valentine:file-warning",
	});
}

export default Component;

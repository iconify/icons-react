import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skfm3vwbi.css';
import '../../css/d/d_d9-ebkf.css';
import '../../css/l/l8ekf_tdo.css';
import '../../css/d/d-c3sfbce.css';
import '../../css/u/urka66-4w.css';
import '../../css/s/s1bz_3bhm.css';
import '../../css/n/n21lp8qgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skfm3vwbi wm-shadow"/><path class="d_d9-ebkf"/><path class="l8ekf_tdo"/><path class="d-c3sfbce"/><path class="urka66-4w"/><path class="s1bz_3bhm wm-shine"/><path class="n21lp8qgr"/>`,
		"fallback": "withicons-plush:filter",
	});
}

export default Component;

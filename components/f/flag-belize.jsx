import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp_oogs4e.css';
import '../../css/j/jjq1xnb_r.css';
import '../../css/y/y5dn3basi.css';
import '../../css/r/r8xz_1b9e.css';
import '../../css/q/q_ef6s7ku.css';
import '../../css/n/nvifddbhb.css';
import '../../css/z/zn59-8b4a.css';
import '../../css/h/hofjrdbqj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp_oogs4e"/><path class="jjq1xnb_r"/><circle class="y5dn3basi"/><circle class="r8xz_1b9e"/><path class="q_ef6s7ku"/><path class="nvifddbhb"/><path class="zn59-8b4a"/><path class="hofjrdbqj"/>`,
		"fallback": "openmoji:flag-belize",
	});
}

export default Component;

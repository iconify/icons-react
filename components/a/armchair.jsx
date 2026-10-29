import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud_k8j3_f.css';
import '../../css/d/dr_rp3bgz.css';
import '../../css/t/tso7djy_n.css';
import '../../css/f/fxv9itbqm.css';
import '../../css/u/u8j0dcb7j.css';
import '../../css/x/x_siebbhy.css';
import '../../css/r/rmvec8vrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud_k8j3_f wm-shadow"/><path class="dr_rp3bgz wm-k"/><path class="tso7djy_n wm-k"/><path class="fxv9itbqm wm-k"/><path class="u8j0dcb7j wm-k"/><path class="wm-k x_siebbhy"/><path class="rmvec8vrn wm-shine"/>`,
		"fallback": "withicons-pastel:armchair",
	});
}

export default Component;

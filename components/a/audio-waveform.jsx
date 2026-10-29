import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip5b0mbhg.css';
import '../../css/l/latngabpx.css';
import '../../css/i/i19wbp_qm.css';
import '../../css/d/duip08bnx.css';
import '../../css/a/aoqyboblb.css';
import '../../css/n/nk13tybwv.css';
import '../../css/a/ao8lmm64t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip5b0mbhg wm-shadow"/><path class="latngabpx wm-k"/><path class="i19wbp_qm wm-k"/><path class="duip08bnx wm-k"/><path class="aoqyboblb wm-k"/><path class="nk13tybwv wm-k"/><path class="ao8lmm64t wm-shine"/>`,
		"fallback": "withicons-pastel:audio-waveform",
	});
}

export default Component;

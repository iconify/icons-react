import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/imw0pubej.css';
import '../../css/m/m2s_ux-ta.css';
import '../../css/e/eoa1yhbin.css';
import '../../css/w/wa7muobyt.css';
import '../../css/s/sukohubkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="imw0pubej wm-k"/><path class="m2s_ux-ta wm-a"/><path class="eoa1yhbin wm-shadow"/><path class="wa7muobyt wm-k"/><path class="sukohubkj wm-a"/></g>`,
		"fallback": "withicons:chart-bar-engrave",
	});
}

export default Component;

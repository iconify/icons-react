import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ik4di1b3c.css';
import '../../css/k/ko6l_j2-e.css';
import '../../css/o/omcg6zbpi.css';
import '../../css/g/g0uz7wbvx.css';
import '../../css/p/pgfuf2bqs.css';
import '../../css/c/ciu8v726o.css';
import '../../css/y/ylfnh6bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ik4di1b3c"/><path class="ko6l_j2-e wm-k"/><path class="omcg6zbpi wm-a"/><path class="g0uz7wbvx wm-s"/><path class="pgfuf2bqs wm-k"/><path class="ciu8v726o wm-a"/><path class="wm-s ylfnh6bls"/></g>`,
		"fallback": "withicons:clock-check-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kyresxbso.css';
import '../../css/k/ks2pbvbhi.css';
import '../../css/y/y5ic9l9qg.css';
import '../../css/c/cbas9yu_l.css';
import '../../css/q/q1y3sf5ml.css';
import '../../css/y/ykarvbcfu.css';
import '../../css/t/tv3t0gbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kyresxbso"/><path class="ks2pbvbhi wm-k"/><path class="wm-k y5ic9l9qg"/><path class="cbas9yu_l wm-k"/><path class="q1y3sf5ml wm-k"/><path class="wm-a ykarvbcfu"/><path class="tv3t0gbis wm-a"/></g>`,
		"fallback": "withicons:images-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byhu7skaw.css';
import '../../css/z/zu_k4b3xx.css';
import '../../css/e/e3ndg2t3g.css';
import '../../css/k/kpcltgbzt.css';
import '../../css/m/mad_2hbbu.css';
import '../../css/h/hbbm33x5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGW9jXAcHN" x1="256" x2="256" y1="433.423" y2="-47.199" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="byhu7skaw"/><stop offset=".24" class="zu_k4b3xx"/><stop offset=".57" class="e3ndg2t3g"/><stop offset=".84" class="kpcltgbzt"/><stop offset="1" class="mad_2hbbu"/></linearGradient><path fill="url(#SVGW9jXAcHN)" class="hbbm33x5p"/>`,
		"fallback": "selfhst:grafana-mimir",
	});
}

export default Component;

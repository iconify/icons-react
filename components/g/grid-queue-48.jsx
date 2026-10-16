import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbo_5h3_g.css';
import '../../css/a/aohc2wbew.css';
import '../../css/h/hss_7gbmm.css';
import '../../css/w/wb3b4xbcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbo_5h3_g"/><path class="aohc2wbew"/><path class="hss_7gbmm"/><path class="wb3b4xbcv"/>`,
		"fallback": "energy-icons:grid-queue-48",
	});
}

export default Component;

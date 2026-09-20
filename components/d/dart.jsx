import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk8d3t44m.css';
import '../../css/s/stui2mbih.css';
import '../../css/r/rk8n59jtv.css';
import '../../css/p/picxr3vbg.css';
import '../../css/y/ydx7-jbeu.css';
import '../../css/s/shllgjboz.css';
import '../../css/y/yh0agxb-f.css';
import '../../css/b/bm5m5iblf.css';
import '../../css/w/w-o12rbkl.css';
import '../../css/a/aasn71bgl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGKrceHeYR" cx="50%" cy="50.002%" r="50.004%" fx="50%" fy="50.002%" gradientTransform="scale(1 .99985)"><stop offset="0%" class="dk8d3t44m"/><stop offset="100%" class="stui2mbih"/></radialGradient></defs><path class="rk8n59jtv"/><path class="picxr3vbg"/><path class="ydx7-jbeu"/><path class="shllgjboz"/><path class="yh0agxb-f"/><path class="bm5m5iblf"/><path class="w-o12rbkl"/><path fill="url(#SVGKrceHeYR)" class="aasn71bgl"/>`,
		"fallback": "thesvg-color:dart",
	});
}

export default Component;

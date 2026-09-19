import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz0bt7bxo.css';
import '../../css/x/xch8ybfpz.css';
import '../../css/i/ite4kqlkr.css';
import '../../css/h/h1_e2-bsq.css';
import '../../css/y/ybj7l6zsr.css';
import '../../css/b/bx3l4r8yo.css';
import '../../css/q/q_ml50b5l.css';
import '../../css/a/awu_y8b1e.css';
import '../../css/e/evodb7bgb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGriZXkbub" x1="502.385" x2="502.385" y1="-40.076" y2="-113.711" gradientTransform="translate(-116.533 90.267)scale(.26667)" gradientUnits="userSpaceOnUse"><stop offset=".303" class="hz0bt7bxo"/><stop offset=".872" class="xch8ybfpz"/></linearGradient><linearGradient id="SVGGOh9hd8g" x1="502.386" x2="502.386" y1="-40.075" y2="-113.71" gradientTransform="translate(-116.533 90.267)scale(.26667)" gradientUnits="userSpaceOnUse"><stop offset=".303" class="hz0bt7bxo"/><stop offset=".872" class="xch8ybfpz"/></linearGradient><linearGradient id="SVGELtL4dDm" x1="502.386" x2="502.386" y1="-40.078" y2="-113.707" gradientTransform="translate(-116.533 90.267)scale(.26667)" gradientUnits="userSpaceOnUse"><stop offset=".303" class="hz0bt7bxo"/><stop offset=".863" class="xch8ybfpz"/></linearGradient></defs><path class="ite4kqlkr"/><path class="h1_e2-bsq"/><path class="ybj7l6zsr"/><path fill="url(#SVGriZXkbub)" class="bx3l4r8yo"/><path fill="url(#SVGGOh9hd8g)" class="q_ml50b5l"/><path fill="url(#SVGELtL4dDm)" class="awu_y8b1e"/><path class="evodb7bgb"/>`,
		"fallback": "devicon:eclipse-wordmark",
	});
}

export default Component;

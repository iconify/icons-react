import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzotk9byf.css';
import '../../css/e/e2bt4bb3k.css';
import '../../css/b/b11yj3vqf.css';
import '../../css/d/d3blh1bls.css';
import '../../css/z/zl8bxhb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG36pMmdQt" x1="-77.82" x2="365.684" y1="572.629" y2="129.125" gradientTransform="matrix(1.1636 0 0 -1.1636 109.145 638.527)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zzotk9byf"/><stop offset="1" class="e2bt4bb3k"/></linearGradient><path fill="url(#SVG36pMmdQt)" class="b11yj3vqf"/><path class="d3blh1bls"/><path class="zl8bxhb7c"/>`,
		"fallback": "selfhst:adguard-home-central-manager",
	});
}

export default Component;

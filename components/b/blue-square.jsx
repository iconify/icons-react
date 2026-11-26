import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru36gnb2i.css';
import '../../css/g/gdp-lpbgi.css';
import '../../css/x/xht9v2b6m.css';
import '../../css/u/uh-vabbch.css';
import '../../css/h/hrsowmbrq.css';
import '../../css/z/zjr7pabxr.css';
import '../../css/y/y-_uuuecm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGYAy6Bevm" cx="64.1" cy="53.4" r="142.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="ru36gnb2i"/><stop offset=".85" class="gdp-lpbgi"/><stop offset="1" class="gdp-lpbgi"/></radialGradient></defs><path class="xht9v2b6m"/><path fill="url(#SVGYAy6Bevm)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="uh-vabbch"/><path class="hrsowmbrq"/><path class="zjr7pabxr"/><path class="y-_uuuecm"/>`,
		"fallback": "xero-emoji:blue-square",
	});
}

export default Component;

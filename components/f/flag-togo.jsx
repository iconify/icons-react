import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/u/upxyo7b5y.css';
import '../../css/q/qg4z8dbtu.css';
import '../../css/s/s-ks1rd8k.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="upxyo7b5y"/><path class="qg4z8dbtu"/><path class="s-ks1rd8k"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-togo",
	});
}

export default Component;

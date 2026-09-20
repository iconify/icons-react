import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/m/mwvy86cpv.css';
import '../../css/k/ki1zkpbpv.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="mwvy86cpv"/><path class="ki1zkpbpv"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-estonia",
	});
}

export default Component;

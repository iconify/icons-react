import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/i/inneowbgb.css';
import '../../css/q/qk-54mb3d.css';
import '../../css/s/s__9l0bok.css';
import '../../css/e/e96mmkbwm.css';
import '../../css/m/ms_47mbgh.css';
import '../../css/u/ub1aa4b5e.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="inneowbgb"/><path class="qk-54mb3d"/><path class="s__9l0bok"/><path class="e96mmkbwm"/><path class="ms_47mbgh"/><path class="ub1aa4b5e"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-mozambique",
	});
}

export default Component;

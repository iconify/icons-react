import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g70whwsdk.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/m/m8hyyfbac.css';
import '../../css/f/ff45hndep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g70whwsdk"/><path class="xgaf0nbdt"/><path class="m8hyyfbac"/><path class="ff45hndep"/></g>`,
		"fallback": "keyline-icons:badge-info-sharp-two-tone",
	});
}

export default Component;

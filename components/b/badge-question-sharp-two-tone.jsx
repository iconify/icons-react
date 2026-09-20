import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g70whwsdk.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/c/czcvxjzwy.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g70whwsdk"/><path class="xgaf0nbdt"/><path class="czcvxjzwy"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:badge-question-sharp-two-tone",
	});
}

export default Component;

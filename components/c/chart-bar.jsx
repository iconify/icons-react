import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nn092_bdq.css';
import '../../css/y/yj29tobmn.css';
import '../../css/k/k9krlhbfd.css';
import '../../css/c/cu8kljwan.css';
import '../../css/o/or22xlbjs.css';
import '../../css/q/q2it56bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nn092_bdq wm-shadow"/><path class="yj29tobmn"/><path class="k9krlhbfd"/><path class="cu8kljwan"/><path class="or22xlbjs"/><path class="q2it56bgm"/></g>`,
		"fallback": "withicons-retro:chart-bar",
	});
}

export default Component;

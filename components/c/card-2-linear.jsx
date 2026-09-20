import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/r/r8aqt-b4e.css';
import '../../css/r/rszwgq9zj.css';
import '../../css/a/arfwosbro.css';
import '../../css/y/ysk2hxt5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="r8aqt-b4e"/><path class="rszwgq9zj"/><path class="arfwosbro"/><path class="ysk2hxt5c"/></g>`,
		"fallback": "solar:card-2-linear",
	});
}

export default Component;

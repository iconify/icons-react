import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qhx_7abdu.css';
import '../../css/i/ic5ae1dgk.css';
import '../../css/c/cvi76znce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qhx_7abdu"/><path class="ic5ae1dgk"/><path class="cvi76znce"/></g>`,
		"fallback": "hugeicons:copy-check",
	});
}

export default Component;

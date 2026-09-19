import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tpkegzb2d.css';
import '../../css/q/qwj7qphyr.css';
import '../../css/u/uefrb7b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tpkegzb2d"/><path class="qwj7qphyr"/><path class="uefrb7b_q"/></g>`,
		"fallback": "hugeicons:cargo-ship",
	});
}

export default Component;

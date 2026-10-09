import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp0_ibgn.css';
import '../../css/v/vr_lhqmel.css';
import '../../css/z/zr7ldxbfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp0_ibgn"/><path class="vr_lhqmel"/><path class="zr7ldxbfq"/>`,
		"fallback": "energy-icons:arrow-down-square-20",
	});
}

export default Component;

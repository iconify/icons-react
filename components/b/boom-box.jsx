import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cq3t79bqd.css';
import '../../css/v/vj_1li4id.css';
import '../../css/k/k0tkchp-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="cq3t79bqd"/><circle class="vj_1li4id"/><path class="k0tkchp-p"/></g>`,
		"fallback": "hugeicons:boom-box",
	});
}

export default Component;

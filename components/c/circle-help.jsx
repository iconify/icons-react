import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/ka8v_pb5v.css';
import '../../css/s/syv48hbha.css';
import '../../css/o/ow1kvlbyk.css';
import '../../css/x/xk5yrwbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ka8v_pb5v"/><path class="syv48hbha"/><path class="ow1kvlbyk"/><path class="xk5yrwbww"/></g>`,
		"fallback": "matita:circle-help",
	});
}

export default Component;

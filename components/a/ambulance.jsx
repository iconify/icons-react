import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/o1wxqeirx.css';
import '../../css/y/y2b366bnn.css';
import '../../css/y/yuoclsbbx.css';
import '../../css/x/xlz0rtbuz.css';
import '../../css/b/b37zg8ubh.css';
import '../../css/n/n2dw57bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="o1wxqeirx"/><path class="y2b366bnn"/><path class="yuoclsbbx"/><path class="xlz0rtbuz"/><path class="b37zg8ubh"/><path class="n2dw57bmq"/></g>`,
		"fallback": "matita:ambulance",
	});
}

export default Component;

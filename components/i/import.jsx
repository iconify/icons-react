import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/yqvkmow1r.css';
import '../../css/k/kfw3mq-ct.css';
import '../../css/z/zqtrx1b9w.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="yqvkmow1r"/><path class="kfw3mq-ct"/><path class="zqtrx1b9w"/></g>`,
		"fallback": "system-uicons:import",
	});
}

export default Component;

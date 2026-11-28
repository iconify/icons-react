import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zjy7hntji.css';
import '../../css/m/m2hacq_bi.css';
import '../../css/g/g9z927bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zjy7hntji"/><path class="m2hacq_bi"/><path class="g9z927bqp"/></g>`,
		"fallback": "iconaut:flip-vertical",
	});
}

export default Component;

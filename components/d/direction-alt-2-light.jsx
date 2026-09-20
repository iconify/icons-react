import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/b3tg1bi3m.css';
import '../../css/o/o0ej62zqp.css';
import '../../css/v/vafq8acsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="b3tg1bi3m"/><path class="o0ej62zqp"/><path class="vafq8acsk"/></g>`,
		"fallback": "lets-icons:direction-alt-2-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/o/oyoh77bru.css';
import '../../css/u/u5iib_b-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="oyoh77bru"/><path class="u5iib_b-u"/></g>`,
		"fallback": "doodle-icons:gamepad",
	});
}

export default Component;

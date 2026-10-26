import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/lgznwrllh.css';
import '../../css/x/x_1kjjybt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="lgznwrllh"/><path class="x_1kjjybt"/></g>`,
		"fallback": "doodle-icons:gear",
	});
}

export default Component;

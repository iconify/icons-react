import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/f/f8tud181n.css';
import '../../css/v/vsneyvb8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="f8tud181n"/><path class="vsneyvb8b"/></g>`,
		"fallback": "doodle-icons:info",
	});
}

export default Component;

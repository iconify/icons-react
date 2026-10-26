import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/wpnq97h_a.css';
import '../../css/c/cys3i128u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="wpnq97h_a"/><path class="cys3i128u"/></g>`,
		"fallback": "doodle-icons:arrow-left",
	});
}

export default Component;

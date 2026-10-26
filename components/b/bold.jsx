import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/cmrfomvxm.css';
import '../../css/i/i6egbobxc.css';
import '../../css/p/p6yhzeble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="cmrfomvxm"/><path class="i6egbobxc"/><path class="p6yhzeble"/></g>`,
		"fallback": "doodle-icons:bold",
	});
}

export default Component;

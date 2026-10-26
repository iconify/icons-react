import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/pvig9y5pi.css';
import '../../css/y/yeotz5brn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="pvig9y5pi"/><path class="yeotz5brn"/></g>`,
		"fallback": "doodle-icons:at-sign",
	});
}

export default Component;

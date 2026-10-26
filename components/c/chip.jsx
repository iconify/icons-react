import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/ugtadac3z.css';
import '../../css/j/jexbt1sfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ugtadac3z"/><path class="jexbt1sfc"/></g>`,
		"fallback": "doodle-icons:chip",
	});
}

export default Component;

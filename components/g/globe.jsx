import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n6lj9wybl.css';
import '../../css/r/rgn98pbkq.css';
import '../../css/c/cod-3j-zz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="n6lj9wybl"/><path class="rgn98pbkq"/><path class="cod-3j-zz"/></g>`,
		"fallback": "doodle-icons:globe",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xngn5jblq.css';
import '../../css/w/wxjaaj_0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="xngn5jblq"/><path class="wxjaaj_0c"/></g>`,
		"fallback": "doodle-icons:book",
	});
}

export default Component;

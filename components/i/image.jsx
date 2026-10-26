import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uhsi68kyl.css';
import '../../css/k/kmh9znz9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uhsi68kyl"/><path class="kmh9znz9n"/></g>`,
		"fallback": "doodle-icons:image",
	});
}

export default Component;

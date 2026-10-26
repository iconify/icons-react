import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/st0-37bed.css';
import '../../css/h/hwytr3k7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="st0-37bed"/><path class="hwytr3k7w"/></g>`,
		"fallback": "doodle-icons:inbox",
	});
}

export default Component;

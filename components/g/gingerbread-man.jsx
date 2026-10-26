import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/lmsnmabhc.css';
import '../../css/x/xcvwpz0ws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="lmsnmabhc"/><path class="xcvwpz0ws"/></g>`,
		"fallback": "doodle-icons:gingerbread-man",
	});
}

export default Component;

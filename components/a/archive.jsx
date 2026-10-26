import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/cldzn4bob.css';
import '../../css/r/rvuyjrfqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="cldzn4bob"/><path class="rvuyjrfqk"/></g>`,
		"fallback": "doodle-icons:archive",
	});
}

export default Component;

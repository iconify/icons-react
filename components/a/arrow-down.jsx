import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/l24gqyb4l.css';
import '../../css/o/o5l66lh6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="l24gqyb4l"/><path class="o5l66lh6m"/></g>`,
		"fallback": "doodle-icons:arrow-down",
	});
}

export default Component;

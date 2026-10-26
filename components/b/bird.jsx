import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n5wlhacmh.css';
import '../../css/l/lnxkbeb5t.css';
import '../../css/n/njx5owbfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="n5wlhacmh"/><path class="lnxkbeb5t"/><path class="njx5owbfj"/></g>`,
		"fallback": "doodle-icons:bird",
	});
}

export default Component;

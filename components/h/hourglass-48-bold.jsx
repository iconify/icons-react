import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsahk5bgt.css';
import '../../css/d/d1j7k6bho.css';
import '../../css/h/hae377b7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsahk5bgt"/><path class="d1j7k6bho"/><path class="hae377b7i"/>`,
		"fallback": "energy-icons:hourglass-48-bold",
	});
}

export default Component;

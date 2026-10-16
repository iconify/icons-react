import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qntmgtbht.css';
import '../../css/m/mfqrv5y5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qntmgtbht"/><path class="mfqrv5y5q"/>`,
		"fallback": "energy-icons:and-gate-20-bold",
	});
}

export default Component;

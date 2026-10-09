import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgrtu-b6i.css';
import '../../css/l/ldszce0qy.css';
import '../../css/q/q5jodccjc.css';
import '../../css/h/huyo77usb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgrtu-b6i"/><path class="ldszce0qy"/><path class="q5jodccjc"/><path class="huyo77usb"/>`,
		"fallback": "energy-icons:community-energy-48",
	});
}

export default Component;

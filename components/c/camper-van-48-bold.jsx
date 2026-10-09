import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9s80l5jq.css';
import '../../css/o/o244yobqh.css';
import '../../css/g/gezrq7_ph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9s80l5jq"/><path class="o244yobqh"/><path class="gezrq7_ph"/>`,
		"fallback": "energy-icons:camper-van-48-bold",
	});
}

export default Component;

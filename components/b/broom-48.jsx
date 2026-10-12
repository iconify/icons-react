import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwpkbabou.css';
import '../../css/t/twn6trvue.css';
import '../../css/m/motikac1y.css';
import '../../css/q/qul3hj1lj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwpkbabou"/><path class="twn6trvue"/><path class="motikac1y"/><path class="qul3hj1lj"/>`,
		"fallback": "energy-icons:broom-48",
	});
}

export default Component;

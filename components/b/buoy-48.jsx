import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqbbhusyr.css';
import '../../css/q/qnl7h7qtq.css';
import '../../css/i/iciarnbnr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqbbhusyr"/><path class="qnl7h7qtq"/><path class="iciarnbnr"/>`,
		"fallback": "energy-icons:buoy-48",
	});
}

export default Component;

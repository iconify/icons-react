import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjzh0acdq.css';
import '../../css/x/xj3pm5bqn.css';
import '../../css/c/ccxgjdu-m.css';
import '../../css/t/tz2duac5o.css';
import '../../css/w/w3qsn0byd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjzh0acdq"/><path class="xj3pm5bqn"/><path class="ccxgjdu-m"/><path class="tz2duac5o"/><path class="w3qsn0byd"/>`,
		"fallback": "energy-icons:enhanced-weathering-48-bold",
	});
}

export default Component;

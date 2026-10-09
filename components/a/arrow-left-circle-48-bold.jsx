import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wou0m8doy.css';
import '../../css/j/jaje2urvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="wou0m8doy"/><path class="jaje2urvr"/>`,
		"fallback": "energy-icons:arrow-left-circle-48-bold",
	});
}

export default Component;

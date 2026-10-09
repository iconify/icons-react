import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu-t6btd.css';
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
		"content": `<path class="kbu-t6btd"/><path class="wou0m8doy"/><path class="jaje2urvr"/>`,
		"fallback": "energy-icons:arrow-left-square-48-bold",
	});
}

export default Component;

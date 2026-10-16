import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_q7i3b9l.css';
import '../../css/h/hw_xbachc.css';
import '../../css/c/chbbpgb6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_q7i3b9l"/><path class="hw_xbachc"/><path class="chbbpgb6p"/>`,
		"fallback": "energy-icons:hydrogen-ship-48-bold",
	});
}

export default Component;

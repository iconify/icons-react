import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8oy8xbju.css';
import '../../css/i/i3509_9wg.css';
import '../../css/r/rro8xm0eh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8oy8xbju"/><path class="i3509_9wg"/><path class="rro8xm0eh"/>`,
		"fallback": "energy-icons:abacus-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8r7dteuj.css';
import '../../css/s/sktgnkdka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8r7dteuj"/><path class="sktgnkdka"/>`,
		"fallback": "energy-icons:battery-pouch-48-bold",
	});
}

export default Component;

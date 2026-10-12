import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpblfybed.css';
import '../../css/u/usk21pbsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpblfybed"/><path class="usk21pbsg"/>`,
		"fallback": "energy-icons:acorn-48-bold",
	});
}

export default Component;

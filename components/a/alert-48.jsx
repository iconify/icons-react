import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siuiveb8v.css';
import '../../css/u/uz5vufbgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siuiveb8v"/><path class="uz5vufbgf"/>`,
		"fallback": "energy-icons:alert-48",
	});
}

export default Component;

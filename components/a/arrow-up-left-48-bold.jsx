import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u19njwbvz.css';
import '../../css/s/s7vp-wbty.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u19njwbvz"/><path class="s7vp-wbty"/>`,
		"fallback": "energy-icons:arrow-up-left-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2g9qy8wl.css';
import '../../css/c/cn-h_ztnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2g9qy8wl"/><path class="cn-h_ztnc"/>`,
		"fallback": "energy-icons:flange-48",
	});
}

export default Component;

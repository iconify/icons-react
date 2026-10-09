import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cip6-i4fr.css';
import '../../css/e/ev-yt_b5j.css';
import '../../css/i/ib9lssnqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cip6-i4fr"/><path class="ev-yt_b5j"/><path class="ib9lssnqx"/>`,
		"fallback": "energy-icons:electric-train-48-bold",
	});
}

export default Component;

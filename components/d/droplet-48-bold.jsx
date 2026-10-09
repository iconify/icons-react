import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khd4an8mp.css';
import '../../css/k/k98e3f_0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khd4an8mp"/><path class="k98e3f_0o"/>`,
		"fallback": "energy-icons:droplet-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h11c3zb8o.css';
import '../../css/z/z_nkx1xuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h11c3zb8o"/><path class="z_nkx1xuv"/>`,
		"fallback": "energy-icons:grid-network-48",
	});
}

export default Component;

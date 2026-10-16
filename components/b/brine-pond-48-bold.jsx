import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfk6c0bde.css';
import '../../css/a/alm7xj5_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfk6c0bde"/><path class="alm7xj5_d"/>`,
		"fallback": "energy-icons:brine-pond-48-bold",
	});
}

export default Component;

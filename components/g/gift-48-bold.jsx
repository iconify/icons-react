import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og9wfebjn.css';
import '../../css/t/t0zqobkpo.css';
import '../../css/p/pbmq6nb_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og9wfebjn"/><path class="t0zqobkpo"/><path class="pbmq6nb_e"/>`,
		"fallback": "energy-icons:gift-48-bold",
	});
}

export default Component;

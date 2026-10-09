import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_tc1dbfe.css';
import '../../css/i/i1-70q6sv.css';
import '../../css/k/k1qkci9od.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_tc1dbfe"/><path class="i1-70q6sv"/><path class="k1qkci9od"/>`,
		"fallback": "energy-icons:cabin-48-bold",
	});
}

export default Component;

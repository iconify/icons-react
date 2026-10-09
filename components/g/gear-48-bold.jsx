import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uchecvbgp.css';
import '../../css/s/sryd7gbuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uchecvbgp"/><path class="sryd7gbuc"/>`,
		"fallback": "energy-icons:gear-48-bold",
	});
}

export default Component;

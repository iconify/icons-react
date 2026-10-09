import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k50n0vbya.css';
import '../../css/e/ei8ys-9zj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k50n0vbya"/><path class="ei8ys-9zj"/>`,
		"fallback": "energy-icons:badge-48",
	});
}

export default Component;

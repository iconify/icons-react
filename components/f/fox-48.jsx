import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8o7jbnvk.css';
import '../../css/x/x0f0yioou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8o7jbnvk"/><path class="x0f0yioou"/>`,
		"fallback": "energy-icons:fox-48",
	});
}

export default Component;

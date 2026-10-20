import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9l2qqe6j.css';
import '../../css/g/g_9d-k8ca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9l2qqe6j"/><path class="g_9d-k8ca"/>`,
		"fallback": "energy-icons:align-bottom-48",
	});
}

export default Component;

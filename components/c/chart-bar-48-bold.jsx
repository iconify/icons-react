import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8u9mrbde.css';
import '../../css/o/oum-_kb8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8u9mrbde"/><path class="oum-_kb8y"/>`,
		"fallback": "energy-icons:chart-bar-48-bold",
	});
}

export default Component;

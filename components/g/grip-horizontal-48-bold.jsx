import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nox51db9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nox51db9m"/>`,
		"fallback": "energy-icons:grip-horizontal-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7lr-0b7o.css';
import '../../css/h/haai3or5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7lr-0b7o"/><path class="haai3or5p"/>`,
		"fallback": "energy-icons:chart-bar-horizontal-48-bold",
	});
}

export default Component;

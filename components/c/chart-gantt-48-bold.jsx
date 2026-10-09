import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg5if1byq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg5if1byq"/>`,
		"fallback": "energy-icons:chart-gantt-48-bold",
	});
}

export default Component;

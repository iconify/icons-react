import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvvhovf8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvvhovf8w"/>`,
		"fallback": "energy-icons:chart-funnel-48-bold",
	});
}

export default Component;

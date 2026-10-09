import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooj-0h2wt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooj-0h2wt"/>`,
		"fallback": "energy-icons:direct-current-48",
	});
}

export default Component;

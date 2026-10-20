import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brn74nbzl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brn74nbzl"/>`,
		"fallback": "energy-icons:distribute-horizontal-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwza8kbcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwza8kbcl"/>`,
		"fallback": "healthicons:dialysis-outline",
	});
}

export default Component;

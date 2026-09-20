import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w49qc5hpt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w49qc5hpt"/>`,
		"fallback": "picon:champagne",
	});
}

export default Component;

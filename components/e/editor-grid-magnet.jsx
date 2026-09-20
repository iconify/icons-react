import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk1z52j7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk1z52j7t"/>`,
		"fallback": "ix:editor-grid-magnet",
	});
}

export default Component;

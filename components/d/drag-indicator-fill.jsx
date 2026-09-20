import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9s9u9bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9s9u9bjh"/>`,
		"fallback": "si:drag-indicator-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py41x_zcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py41x_zcy"/>`,
		"fallback": "si:drag-indicator-alt-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owioo-z8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owioo-z8i"/>`,
		"fallback": "streamline-ultimate:filter-1",
	});
}

export default Component;

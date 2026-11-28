import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzc1k193u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzc1k193u"/>`,
		"fallback": "noviair-light:button",
	});
}

export default Component;

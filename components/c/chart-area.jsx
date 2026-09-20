import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oabk7f9qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oabk7f9qq"/>`,
		"fallback": "keyline-icons:chart-area",
	});
}

export default Component;

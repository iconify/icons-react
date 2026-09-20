import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3vqsb6p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs3vqsb6p"/>`,
		"fallback": "pinhead:column-shrine",
	});
}

export default Component;

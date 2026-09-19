import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0czblbob.css';

const viewBox = {"width":464,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0czblbob"/>`,
		"fallback": "ps:amazon",
	});
}

export default Component;

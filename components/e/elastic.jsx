import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_sofzb5z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_sofzb5z"/>`,
		"fallback": "vaadin:elastic",
	});
}

export default Component;

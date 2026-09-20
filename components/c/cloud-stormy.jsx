import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9725xb3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9725xb3t"/>`,
		"fallback": "oui:cloud-stormy",
	});
}

export default Component;

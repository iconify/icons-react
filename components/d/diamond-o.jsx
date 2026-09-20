import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9rat2byf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9rat2byf"/>`,
		"fallback": "vaadin:diamond-o",
	});
}

export default Component;

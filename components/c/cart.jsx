import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyih9acsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyih9acsq"/>`,
		"fallback": "vaadin:cart",
	});
}

export default Component;

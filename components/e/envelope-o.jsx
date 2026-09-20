import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr4f3tbci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr4f3tbci"/>`,
		"fallback": "vaadin:envelope-o",
	});
}

export default Component;

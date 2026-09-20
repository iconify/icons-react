import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsmvyzb9u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsmvyzb9u"/>`,
		"fallback": "vaadin:check-square",
	});
}

export default Component;

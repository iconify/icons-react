import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miodk4bix.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miodk4bix"/>`,
		"fallback": "vaadin:flash",
	});
}

export default Component;

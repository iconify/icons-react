import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipro3nb5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ipro3nb5u"/>`,
		"fallback": "gravity-ui:bars-descending-align-left-arrow-down",
	});
}

export default Component;

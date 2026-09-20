import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc4x_wb4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc4x_wb4t"/>`,
		"fallback": "ix:chevron-up-small",
	});
}

export default Component;

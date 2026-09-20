import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek2b1yb2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek2b1yb2u"/>`,
		"fallback": "ix:blazor",
	});
}

export default Component;

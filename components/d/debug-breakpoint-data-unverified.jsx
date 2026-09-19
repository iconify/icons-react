import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvnle8i8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvnle8i8r"/>`,
		"fallback": "codicon:debug-breakpoint-data-unverified",
	});
}

export default Component;

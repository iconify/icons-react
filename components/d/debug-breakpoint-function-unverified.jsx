import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4ztjyrwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4ztjyrwc"/>`,
		"fallback": "codicon:debug-breakpoint-function-unverified",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei6mfwbgr.css';
import '../../css/b/bc_0ayxta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei6mfwbgr"/><path class="bc_0ayxta"/>`,
		"fallback": "octicon:cache-16",
	});
}

export default Component;

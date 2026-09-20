import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3frkwgdc.css';
import '../../css/i/irv6a3b8z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3frkwgdc"/><path class="irv6a3b8z"/>`,
		"fallback": "octicon:copy-16",
	});
}

export default Component;

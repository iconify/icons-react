import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsmsj-9cd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsmsj-9cd"/>`,
		"fallback": "codicon:heart-filled",
	});
}

export default Component;

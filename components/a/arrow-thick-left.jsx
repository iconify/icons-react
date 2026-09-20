import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2xd09b8a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2xd09b8a"/>`,
		"fallback": "oi:arrow-thick-left",
	});
}

export default Component;

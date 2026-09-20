import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3lmee8zj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3lmee8zj"/>`,
		"fallback": "ix:hourglass-end",
	});
}

export default Component;

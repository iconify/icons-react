import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upousxb2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upousxb2y"/>`,
		"fallback": "codicon:info",
	});
}

export default Component;

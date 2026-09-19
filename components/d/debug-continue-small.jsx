import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5mp5wb5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5mp5wb5u"/>`,
		"fallback": "codicon:debug-continue-small",
	});
}

export default Component;

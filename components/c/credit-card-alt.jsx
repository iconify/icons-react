import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf2d4tc-m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf2d4tc-m"/>`,
		"fallback": "fa7-regular:credit-card-alt",
	});
}

export default Component;

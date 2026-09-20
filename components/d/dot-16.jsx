import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfslq-b4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfslq-b4u"/>`,
		"fallback": "octicon:dot-16",
	});
}

export default Component;

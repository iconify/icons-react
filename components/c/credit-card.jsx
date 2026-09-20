import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on1r8lbod.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on1r8lbod"/>`,
		"fallback": "octicon:credit-card",
	});
}

export default Component;

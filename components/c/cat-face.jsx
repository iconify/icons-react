import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2-2dm4yo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2-2dm4yo"/>`,
		"fallback": "dinkie-icons:cat-face",
	});
}

export default Component;

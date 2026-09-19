import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9g90xb2n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9g90xb2n"/>`,
		"fallback": "fa7-brands:a11y-project",
	});
}

export default Component;

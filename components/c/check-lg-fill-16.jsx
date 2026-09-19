import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aech68a0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aech68a0h"/>`,
		"fallback": "garden:check-lg-fill-16",
	});
}

export default Component;

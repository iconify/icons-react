import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cug31wb8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cug31wb8h"/>`,
		"fallback": "bi:heptagon",
	});
}

export default Component;

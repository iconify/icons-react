import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa0_5kb_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa0_5kb_s"/>`,
		"fallback": "bi:building-fill",
	});
}

export default Component;

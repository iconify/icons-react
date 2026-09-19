import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pburr5brf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pburr5brf"/>`,
		"fallback": "bi:chevron-compact-up",
	});
}

export default Component;

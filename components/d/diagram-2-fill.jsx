import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z08c56b4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z08c56b4v"/>`,
		"fallback": "bi:diagram-2-fill",
	});
}

export default Component;

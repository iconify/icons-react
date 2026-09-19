import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a61q8-b-l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a61q8-b-l"/>`,
		"fallback": "bi:arrow-down-circle-fill",
	});
}

export default Component;

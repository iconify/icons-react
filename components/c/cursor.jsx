import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1w6h6fuo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1w6h6fuo"/>`,
		"fallback": "bi:cursor",
	});
}

export default Component;

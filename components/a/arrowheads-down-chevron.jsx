import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl9y0jbvn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl9y0jbvn"/>`,
		"fallback": "streamline-block:arrowheads-down-chevron",
	});
}

export default Component;

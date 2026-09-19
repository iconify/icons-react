import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifn16dbqs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifn16dbqs"/>`,
		"fallback": "at-icons:arrow-split",
	});
}

export default Component;

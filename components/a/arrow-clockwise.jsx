import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzy7cxw4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzy7cxw4j"/>`,
		"fallback": "at-icons:arrow-clockwise",
	});
}

export default Component;

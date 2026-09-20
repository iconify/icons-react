import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1a15u6ec.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1a15u6ec"/>`,
		"fallback": "streamline-block:entertainment-books",
	});
}

export default Component;

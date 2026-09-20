import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn5q14rop.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn5q14rop"/>`,
		"fallback": "lsicon:file-txt-outline",
	});
}

export default Component;

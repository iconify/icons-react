import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4-dr1gfb.css';
import '../../css/q/qql1b-83c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4-dr1gfb"/><path class="qql1b-83c"/>`,
		"fallback": "streamline-block:content-crop",
	});
}

export default Component;

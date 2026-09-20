import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ychnccbmn.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ychnccbmn"/>`,
		"fallback": "lineicons:arrow-both-direction-horizontal-1",
	});
}

export default Component;

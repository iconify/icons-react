import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4go9bboz.css';
import '../../css/y/y1vck7bwl.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4go9bboz"/><path class="y1vck7bwl"/>`,
		"fallback": "lineicons:coin",
	});
}

export default Component;

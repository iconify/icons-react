import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4l-yfbgh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4l-yfbgh"/>`,
		"fallback": "teenyicons:arrow-right-outline",
	});
}

export default Component;

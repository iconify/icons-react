import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx54llnwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx54llnwl"/>`,
		"fallback": "ion:android-star-outline",
	});
}

export default Component;

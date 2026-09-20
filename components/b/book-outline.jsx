import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlmq6jb_r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlmq6jb_r"/>`,
		"fallback": "teenyicons:book-outline",
	});
}

export default Component;

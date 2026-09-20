import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmr7w7n-n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmr7w7n-n"/>`,
		"fallback": "lineicons:bolt",
	});
}

export default Component;

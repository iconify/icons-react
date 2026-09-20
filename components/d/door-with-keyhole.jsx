import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9f9t-wdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9f9t-wdx"/>`,
		"fallback": "roentgen:door-with-keyhole",
	});
}

export default Component;

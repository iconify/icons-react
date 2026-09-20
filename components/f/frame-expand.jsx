import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc71leb5c.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc71leb5c"/>`,
		"fallback": "lineicons:frame-expand",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nga6i44tb.css';
import '../../css/r/r7yb4cbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nga6i44tb"/><path class="r7yb4cbgi"/>`,
		"fallback": "streamline-ultimate:barbecue-grill-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq_xre3rx.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq_xre3rx"/>`,
		"fallback": "lineicons:forward",
	});
}

export default Component;

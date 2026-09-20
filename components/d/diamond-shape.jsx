import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqfc2-b2p.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqfc2-b2p"/>`,
		"fallback": "lineicons:diamond-shape",
	});
}

export default Component;

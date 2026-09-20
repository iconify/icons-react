import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds4gxrb-k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds4gxrb-k"/>`,
		"fallback": "medical-icon:i-restaurant",
	});
}

export default Component;

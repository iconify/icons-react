import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu0f6vbvm.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu0f6vbvm"/>`,
		"fallback": "zmdi:arrow-back",
	});
}

export default Component;

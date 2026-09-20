import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybrcn-9lv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybrcn-9lv"/>`,
		"fallback": "oi:collapse-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufpt_wb5b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufpt_wb5b"/>`,
		"fallback": "pullo:helicopter-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp4ber88j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp4ber88j"/>`,
		"fallback": "la:cc-apple-pay",
	});
}

export default Component;

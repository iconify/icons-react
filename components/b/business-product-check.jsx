import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxtl_ubyj.css';
import '../../css/s/s7-mspfvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxtl_ubyj"/><path class="s7-mspfvl"/>`,
		"fallback": "streamline-pixel:business-product-check",
	});
}

export default Component;

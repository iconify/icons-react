import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4ipujbxv.css';
import '../../css/v/vyszd-bor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4ipujbxv"/><path class="vyszd-bor"/>`,
		"fallback": "streamline-pixel:business-product-startup-2",
	});
}

export default Component;

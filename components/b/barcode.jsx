import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qykrqjwin.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qykrqjwin"/>`,
		"fallback": "fa:barcode",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qere4db2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qere4db2v"/>`,
		"fallback": "noviair-light:barcode-check",
	});
}

export default Component;

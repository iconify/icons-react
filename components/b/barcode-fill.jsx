import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7lu9-m2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7lu9-m2i"/>`,
		"fallback": "mingcute:barcode-fill",
	});
}

export default Component;

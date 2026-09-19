import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdbapx9zn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdbapx9zn"/>`,
		"fallback": "f7:barcode",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm54_4bbi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm54_4bbi"/>`,
		"fallback": "famicons:barcode-outline",
	});
}

export default Component;

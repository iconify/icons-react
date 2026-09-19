import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f69e0_7am.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f69e0_7am"/>`,
		"fallback": "fa7-solid:barcode",
	});
}

export default Component;

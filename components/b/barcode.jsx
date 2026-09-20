import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4obf_6wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4obf_6wn"/>`,
		"fallback": "mdi:barcode",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cehr4-g8x.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cehr4-g8x"/>`,
		"fallback": "fa6-solid:file-signature",
	});
}

export default Component;

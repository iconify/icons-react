import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgm26p3ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgm26p3ak"/>`,
		"fallback": "majesticons:barcode-2-line",
	});
}

export default Component;

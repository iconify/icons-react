import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkd4cdchu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkd4cdchu"/>`,
		"fallback": "bxs:barcode",
	});
}

export default Component;

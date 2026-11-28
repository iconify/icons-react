import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_l4hqb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_l4hqb_d"/>`,
		"fallback": "noviair-light:barcode-search",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl38k0bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl38k0bkg"/>`,
		"fallback": "mingcute:bedside-table-2-fill",
	});
}

export default Component;

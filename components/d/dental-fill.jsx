import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t54_tnbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t54_tnbzz"/>`,
		"fallback": "mingcute:dental-fill",
	});
}

export default Component;

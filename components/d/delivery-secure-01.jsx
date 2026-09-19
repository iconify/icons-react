import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4t3_bbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4t3_bbpj"/>`,
		"fallback": "hugeicons:delivery-secure-01",
	});
}

export default Component;

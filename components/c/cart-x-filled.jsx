import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poa381bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poa381bhe"/>`,
		"fallback": "boxicons:cart-x-filled",
	});
}

export default Component;

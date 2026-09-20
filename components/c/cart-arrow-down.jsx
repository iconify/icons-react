import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmc00ibtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmc00ibtt"/>`,
		"fallback": "prime:cart-arrow-down",
	});
}

export default Component;

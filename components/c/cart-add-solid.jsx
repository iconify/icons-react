import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l20sm2b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l20sm2b8u"/>`,
		"fallback": "pixel:cart-add-solid",
	});
}

export default Component;

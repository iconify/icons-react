import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h61y9uz1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h61y9uz1i"/>`,
		"fallback": "mdi:closet-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be2pofbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be2pofbgw"/>`,
		"fallback": "mdi:food-variant",
	});
}

export default Component;

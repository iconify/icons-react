import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as1l3gb4t.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as1l3gb4t"/>`,
		"fallback": "fa6-solid:cart-plus",
	});
}

export default Component;

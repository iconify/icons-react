import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfqxogb8h.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfqxogb8h"/>`,
		"fallback": "fa6-brands:cc-mastercard",
	});
}

export default Component;

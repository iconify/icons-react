import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp2hfzgbh.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp2hfzgbh"/>`,
		"fallback": "fa-brands:chrome",
	});
}

export default Component;

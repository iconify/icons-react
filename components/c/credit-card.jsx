import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aldytac9r.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aldytac9r"/>`,
		"fallback": "fa6-regular:credit-card",
	});
}

export default Component;

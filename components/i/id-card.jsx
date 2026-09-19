import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch09i9bes.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch09i9bes"/>`,
		"fallback": "fa6-regular:id-card",
	});
}

export default Component;

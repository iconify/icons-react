import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en6999bcy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en6999bcy"/>`,
		"fallback": "fa6-solid:bugs",
	});
}

export default Component;

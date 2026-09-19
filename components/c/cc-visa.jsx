import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sngdbccpl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sngdbccpl"/>`,
		"fallback": "fa6-brands:cc-visa",
	});
}

export default Component;

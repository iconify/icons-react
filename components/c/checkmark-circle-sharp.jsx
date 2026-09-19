import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka4u2_gho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka4u2_gho"/>`,
		"fallback": "ion:checkmark-circle-sharp",
	});
}

export default Component;

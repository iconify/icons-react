import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnc5a8hke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnc5a8hke"/>`,
		"fallback": "ion:bag-remove-outline",
	});
}

export default Component;

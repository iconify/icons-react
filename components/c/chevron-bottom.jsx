import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz945htqo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz945htqo"/>`,
		"fallback": "oi:chevron-bottom",
	});
}

export default Component;

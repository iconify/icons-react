import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfv2_eccz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfv2_eccz"/>`,
		"fallback": "selfhst:ergo",
	});
}

export default Component;

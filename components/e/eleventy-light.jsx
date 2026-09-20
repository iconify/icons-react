import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo8k09bah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo8k09bah"/>`,
		"fallback": "selfhst:eleventy-light",
	});
}

export default Component;

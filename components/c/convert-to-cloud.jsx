import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whpbu3b6i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whpbu3b6i"/>`,
		"fallback": "carbon:convert-to-cloud",
	});
}

export default Component;

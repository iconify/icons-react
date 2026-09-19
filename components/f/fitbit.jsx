import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9q15b9rp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9q15b9rp"/>`,
		"fallback": "cib:fitbit",
	});
}

export default Component;

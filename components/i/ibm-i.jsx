import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkkhz-2jy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkkhz-2jy"/>`,
		"fallback": "carbon:ibm-i",
	});
}

export default Component;

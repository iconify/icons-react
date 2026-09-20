import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvh8l4olr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvh8l4olr"/>`,
		"fallback": "keyline-icons:cloud-minus",
	});
}

export default Component;

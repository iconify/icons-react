import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1z1pobji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1z1pobji"/>`,
		"fallback": "thesvg-color:ibm-granite",
	});
}

export default Component;

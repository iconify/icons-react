import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p214o0byb.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p214o0byb"/>`,
		"fallback": "topcoat:image-outline",
	});
}

export default Component;

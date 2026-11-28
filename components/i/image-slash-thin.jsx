import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyr86z2_k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyr86z2_k"/>`,
		"fallback": "pullo:image-slash-thin",
	});
}

export default Component;

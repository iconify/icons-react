import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v15db6dui.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v15db6dui"/>`,
		"fallback": "pullo:bring-forward-fill",
	});
}

export default Component;

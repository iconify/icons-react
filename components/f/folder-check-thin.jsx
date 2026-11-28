import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b918jacqz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b918jacqz"/>`,
		"fallback": "pullo:folder-check-thin",
	});
}

export default Component;

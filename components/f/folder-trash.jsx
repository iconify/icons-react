import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofo_bdcmc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofo_bdcmc"/>`,
		"fallback": "quill:folder-trash",
	});
}

export default Component;

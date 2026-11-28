import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khl0h4dia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khl0h4dia"/>`,
		"fallback": "iconaut:file-star-solid",
	});
}

export default Component;

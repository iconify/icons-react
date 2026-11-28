import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5je0-4fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5je0-4fg"/>`,
		"fallback": "noviair-light:butterfly-heart",
	});
}

export default Component;

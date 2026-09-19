import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whf6808kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whf6808kb"/>`,
		"fallback": "griddy-icons:columns-four",
	});
}

export default Component;

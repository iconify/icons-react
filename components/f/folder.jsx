import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbzl1cb6f.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbzl1cb6f"/>`,
		"fallback": "topcoat:folder",
	});
}

export default Component;

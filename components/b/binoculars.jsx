import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ien7yn-4p.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ien7yn-4p"/>`,
		"fallback": "fa:binoculars",
	});
}

export default Component;

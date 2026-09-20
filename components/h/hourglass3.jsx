import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfpvy8bur.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfpvy8bur"/>`,
		"fallback": "picon:hourglass3",
	});
}

export default Component;

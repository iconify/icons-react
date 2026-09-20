import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9nl6fbgf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9nl6fbgf"/>`,
		"fallback": "picon:desc",
	});
}

export default Component;

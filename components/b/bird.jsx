import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2et42jeo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2et42jeo"/>`,
		"fallback": "picon:bird",
	});
}

export default Component;

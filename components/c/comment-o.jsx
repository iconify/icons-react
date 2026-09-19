import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml5gl5ako.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml5gl5ako"/>`,
		"fallback": "fa:comment-o",
	});
}

export default Component;

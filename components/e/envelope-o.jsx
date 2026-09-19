import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8z8v7boy.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8z8v7boy"/>`,
		"fallback": "fa:envelope-o",
	});
}

export default Component;

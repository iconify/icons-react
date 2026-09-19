import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb0yldbeu.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb0yldbeu"/>`,
		"fallback": "fa:edit",
	});
}

export default Component;

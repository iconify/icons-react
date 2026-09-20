import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0a6sbcax.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0a6sbcax"/>`,
		"fallback": "maki:bbq-11",
	});
}

export default Component;

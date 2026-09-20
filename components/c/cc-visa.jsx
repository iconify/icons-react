import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb7i6l95g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb7i6l95g"/>`,
		"fallback": "la:cc-visa",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2uy08i6u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2uy08i6u"/>`,
		"fallback": "memory:arrow-up",
	});
}

export default Component;

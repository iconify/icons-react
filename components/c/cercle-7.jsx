import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1a6a-b6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1a6a-b6r"/>`,
		"fallback": "subway:cercle-7",
	});
}

export default Component;

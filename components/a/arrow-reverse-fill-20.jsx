import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2tzt3bft.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2tzt3bft"/>`,
		"fallback": "garden:arrow-reverse-fill-20",
	});
}

export default Component;

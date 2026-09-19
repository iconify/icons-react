import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2rg7xbog.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2rg7xbog"/>`,
		"fallback": "garden:banknote-fill-16",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkski0lic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkski0lic"/>`,
		"fallback": "la:glass-martini",
	});
}

export default Component;

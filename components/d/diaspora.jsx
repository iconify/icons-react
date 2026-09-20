import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wln7cnp3w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wln7cnp3w"/>`,
		"fallback": "la:diaspora",
	});
}

export default Component;

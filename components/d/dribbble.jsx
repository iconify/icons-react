import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgm34ztfd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgm34ztfd"/>`,
		"fallback": "la:dribbble",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4govck-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4govck-r"/>`,
		"fallback": "la:html5",
	});
}

export default Component;

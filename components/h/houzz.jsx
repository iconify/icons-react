import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj6g6jboh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj6g6jboh"/>`,
		"fallback": "fa7-brands:houzz",
	});
}

export default Component;

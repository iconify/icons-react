import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9301-mej.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9301-mej"/>`,
		"fallback": "pullo:border-top-thin",
	});
}

export default Component;

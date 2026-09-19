import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx-69zu8h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx-69zu8h"/>`,
		"fallback": "whh:buttonb",
	});
}

export default Component;

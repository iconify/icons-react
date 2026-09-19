import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnqw5pnpo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnqw5pnpo"/>`,
		"fallback": "icons8:football2",
	});
}

export default Component;

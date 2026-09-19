import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgk9v4g2f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgk9v4g2f"/>`,
		"fallback": "cib:buy-me-a-coffee",
	});
}

export default Component;

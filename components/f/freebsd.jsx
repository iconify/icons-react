import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwbszgk6r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwbszgk6r"/>`,
		"fallback": "cib:freebsd",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni46c40-i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni46c40-i"/>`,
		"fallback": "fluent-emoji-high-contrast:fax-machine",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0o33vb9v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0o33vb9v"/>`,
		"fallback": "fa7-solid:baht-sign",
	});
}

export default Component;

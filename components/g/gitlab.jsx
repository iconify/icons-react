import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb8ln3bsn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb8ln3bsn"/>`,
		"fallback": "fa7-brands:gitlab",
	});
}

export default Component;

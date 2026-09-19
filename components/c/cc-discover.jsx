import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy9ieug-w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy9ieug-w"/>`,
		"fallback": "fa7-brands:cc-discover",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekjr1ib4o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekjr1ib4o"/>`,
		"fallback": "material-icon-theme:disc",
	});
}

export default Component;

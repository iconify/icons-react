import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csvj6lbhi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csvj6lbhi"/>`,
		"fallback": "fa7-brands:duolingo",
	});
}

export default Component;

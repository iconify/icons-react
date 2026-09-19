import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w76bybb2w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w76bybb2w"/>`,
		"fallback": "fa7-brands:accusoft",
	});
}

export default Component;

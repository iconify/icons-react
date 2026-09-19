import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaivl163v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaivl163v"/>`,
		"fallback": "fa7-regular:comments",
	});
}

export default Component;

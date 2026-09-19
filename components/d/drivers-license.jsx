import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl-ou4joe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl-ou4joe"/>`,
		"fallback": "fa7-solid:drivers-license",
	});
}

export default Component;

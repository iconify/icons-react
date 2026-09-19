import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzxasfbbs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzxasfbbs"/>`,
		"fallback": "at-icons:baseball-bat",
	});
}

export default Component;

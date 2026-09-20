import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro38-jb8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro38-jb8l"/>`,
		"fallback": "octicon:home-16",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0emlsjte.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0emlsjte"/>`,
		"fallback": "octicon:diff-modified",
	});
}

export default Component;

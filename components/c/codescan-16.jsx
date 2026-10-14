import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kcy-bcr.css';
import '../../css/u/uqoc3xb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3kcy-bcr"/><path class="uqoc3xb4b"/>`,
		"fallback": "octicon:codescan-16",
	});
}

export default Component;

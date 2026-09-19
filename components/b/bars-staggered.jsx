import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/balawacqk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="balawacqk"/>`,
		"fallback": "fa7-solid:bars-staggered",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnfh_j-gh.css';

const viewBox = {"width":819,"height":620};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnfh_j-gh"/>`,
		"fallback": "ls:cloud",
	});
}

export default Component;

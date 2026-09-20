import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccemtwbeg.css';
import '../../css/w/w3qhuhbpu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccemtwbeg"/><path class="w3qhuhbpu"/>`,
		"fallback": "openmoji:high-voltage",
	});
}

export default Component;

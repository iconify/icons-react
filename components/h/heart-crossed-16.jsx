import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm3r0-bhi.css';
import '../../css/p/pyjnocccs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm3r0-bhi"/><path clip-rule="evenodd" class="pyjnocccs"/>`,
		"fallback": "qlementine-icons:heart-crossed-16",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np_7-4bcq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np_7-4bcq"/>`,
		"fallback": "fa7-solid:head-side-cough-slash",
	});
}

export default Component;

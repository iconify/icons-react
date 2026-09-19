import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn6krnluk.css';
import '../../css/x/xlghf-tyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn6krnluk"/><path class="xlghf-tyu"/>`,
		"fallback": "boxicons:discussion-filled",
	});
}

export default Component;

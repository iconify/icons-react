import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p3m8cmtdy.css';
import '../../css/r/r9ixvp21u.css';
import '../../css/p/po3o6yboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p3m8cmtdy"/><path class="r9ixvp21u"/><path class="po3o6yboy"/></g>`,
		"fallback": "hugeicons:circle-lock-02",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsp2tpz6a.css';
import '../../css/w/wjbqyhpxe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsp2tpz6a"/><path class="wjbqyhpxe"/>`,
		"fallback": "openmoji:cross-mark",
	});
}

export default Component;

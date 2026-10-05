import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rvcky7bci.css';
import '../../css/s/s53y4obfm.css';
import '../../css/u/uoiay--1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rvcky7bci"/><path class="s53y4obfm"/><path class="uoiay--1q"/></g>`,
		"fallback": "matita:external-link",
	});
}

export default Component;

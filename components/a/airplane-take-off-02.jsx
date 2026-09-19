import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yi0niqb3k.css';
import '../../css/z/zol1jwuww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yi0niqb3k"/><path class="zol1jwuww"/></g>`,
		"fallback": "hugeicons:airplane-take-off-02",
	});
}

export default Component;

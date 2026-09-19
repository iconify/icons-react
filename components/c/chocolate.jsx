import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gnu5dik5b.css';
import '../../css/q/q4rumib0w.css';
import '../../css/v/vp5nx6b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gnu5dik5b"/><path class="q4rumib0w"/><path class="vp5nx6b1u"/></g>`,
		"fallback": "hugeicons:chocolate",
	});
}

export default Component;

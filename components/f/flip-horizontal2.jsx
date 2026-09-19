import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xkzigccsu.css';
import '../../css/j/jycvhms3v.css';
import '../../css/f/farndtbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xkzigccsu"/><path class="jycvhms3v"/><path class="farndtbyi"/></g>`,
		"fallback": "hugeicons:flip-horizontal2",
	});
}

export default Component;

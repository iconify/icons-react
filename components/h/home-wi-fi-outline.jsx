import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmj3xepjb.css';
import '../../css/j/joty_-bbk.css';
import '../../css/x/xq587lbyn.css';
import '../../css/n/nsza0ub4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmj3xepjb"/><path class="joty_-bbk"/><path class="xq587lbyn"/><path clip-rule="evenodd" class="nsza0ub4r"/>`,
		"fallback": "solar:home-wi-fi-outline",
	});
}

export default Component;

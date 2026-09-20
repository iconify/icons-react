import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-xldtp5u.css';
import '../../css/y/yhp6z-bco.css';
import '../../css/h/huq9i0-2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-xldtp5u"/><path clip-rule="evenodd" class="yhp6z-bco"/><path class="huq9i0-2s"/></g>`,
		"fallback": "reicon:battery-half2",
	});
}

export default Component;

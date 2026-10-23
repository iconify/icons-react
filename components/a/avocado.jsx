import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wuaqcbchd.css';
import '../../css/y/ykouyac4a.css';
import '../../css/v/vy3mglwnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wuaqcbchd"/><path class="ykouyac4a"/><path class="vy3mglwnk"/></g>`,
		"fallback": "andrsrxn:avocado",
	});
}

export default Component;

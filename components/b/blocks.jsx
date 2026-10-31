import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rbb6tob6l.css';
import '../../css/n/nkugj3b2r.css';
import '../../css/w/wnnacvb8t.css';
import '../../css/w/w7ich50hh.css';
import '../../css/w/w4lzxfbzn.css';
import '../../css/b/bx3qe-jui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rbb6tob6l wm-shadow"/><path class="nkugj3b2r wm-shadow"/><path class="wnnacvb8t"/><path class="w7ich50hh"/><path class="w4lzxfbzn"/><path class="bx3qe-jui"/></g>`,
		"fallback": "withicons-brutal:blocks",
	});
}

export default Component;

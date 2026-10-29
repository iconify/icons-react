import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-24gnh2l.css';
import '../../css/w/wfww9btsg.css';
import '../../css/c/cemh59tby.css';
import '../../css/o/oydb5pr6b.css';
import '../../css/x/xffrv2fub.css';
import '../../css/w/w3nzejbrf.css';
import '../../css/f/fg349b9qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-24gnh2l wm-shadow"/><path class="wfww9btsg"/><path class="cemh59tby"/><path class="oydb5pr6b"/><path class="xffrv2fub"/><path class="w3nzejbrf wm-shine"/><path class="fg349b9qk"/>`,
		"fallback": "withicons-plush:chevron-down",
	});
}

export default Component;

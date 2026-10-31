import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p8chwr1rl.css';
import '../../css/v/v60l7wt2u.css';
import '../../css/t/tichokbrp.css';
import '../../css/q/qm0vlobvp.css';
import '../../css/z/zc21rzflq.css';
import '../../css/z/zq6espbga.css';
import '../../css/h/hd28q9vbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p8chwr1rl wm-shadow"/><path class="v60l7wt2u"/><path class="tichokbrp"/><path class="qm0vlobvp"/><path class="zc21rzflq"/><path class="zq6espbga"/><path class="hd28q9vbq"/></g>`,
		"fallback": "withicons-brutal:avatar-older-woman",
	});
}

export default Component;

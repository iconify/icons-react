import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wcvxvkbpw.css';
import '../../css/t/th88qtb3j.css';
import '../../css/w/w_crj8zkq.css';
import '../../css/f/ftcwajbky.css';
import '../../css/z/zy9xw0nee.css';
import '../../css/g/g2ivodb2f.css';
import '../../css/v/vt-2nu9uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wcvxvkbpw wm-k"/><path class="th88qtb3j wm-a"/><path class="w_crj8zkq wm-s"/><path class="ftcwajbky wm-shadow"/><path class="wm-a zy9xw0nee"/><path class="g2ivodb2f wm-k"/><path class="vt-2nu9uw wm-s"/></g>`,
		"fallback": "withicons:firecracker-string-engrave",
	});
}

export default Component;

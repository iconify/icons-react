import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/go7m5qb9b.css';
import '../../css/j/jfnbg6t3e.css';
import '../../css/b/b5iz41bba.css';
import '../../css/g/gkbm3cc5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="go7m5qb9b"/><path class="jfnbg6t3e wm-k"/><path class="b5iz41bba wm-k"/><path class="gkbm3cc5v wm-a"/></g>`,
		"fallback": "withicons:avatar-owl-sketch",
	});
}

export default Component;

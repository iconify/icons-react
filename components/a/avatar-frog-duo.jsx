import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zqslojb_x.css';
import '../../css/b/bks1_nwhr.css';
import '../../css/j/j9br22bqu.css';
import '../../css/b/bfi0x3beo.css';
import '../../css/i/izujc22-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zqslojb_x"/><path class="bks1_nwhr"/><path class="j9br22bqu wm-a"/><path class="bfi0x3beo"/><path class="izujc22-d"/></g>`,
		"fallback": "withicons:avatar-frog-duo",
	});
}

export default Component;

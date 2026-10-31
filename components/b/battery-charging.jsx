import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yds90oc7g.css';
import '../../css/l/la4hwkjrh.css';
import '../../css/u/uuyh00o3a.css';
import '../../css/b/bt5tz1b5o.css';
import '../../css/w/wipjz_lwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yds90oc7g"/><path class="la4hwkjrh"/><path class="uuyh00o3a"/><path class="bt5tz1b5o"/><path class="wipjz_lwy wm-s"/></g>`,
		"fallback": "withicons-retro:battery-charging",
	});
}

export default Component;

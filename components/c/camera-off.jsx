import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/de5b1bc4p.css';
import '../../css/x/xkuqd6v2h.css';
import '../../css/a/a4uh_yb6g.css';
import '../../css/y/yk05-6nhe.css';
import '../../css/a/a31o9tnna.css';
import '../../css/l/lja_fgb6v.css';
import '../../css/w/w1dzq0b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="de5b1bc4p wm-shadow"/><path class="xkuqd6v2h"/><path class="a4uh_yb6g"/><path class="yk05-6nhe"/><path class="a31o9tnna"/><path class="lja_fgb6v"/><path class="w1dzq0b-p wm-s"/></g>`,
		"fallback": "withicons-retro:camera-off",
	});
}

export default Component;

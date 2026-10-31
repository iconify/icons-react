import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ludflnrcq.css';
import '../../css/q/qlvelnbtj.css';
import '../../css/h/ho4kbybvm.css';
import '../../css/c/cr6b-0bkb.css';
import '../../css/b/b64tynb4l.css';
import '../../css/l/lum4z6b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ludflnrcq wm-shadow"/><path class="qlvelnbtj"/><path class="ho4kbybvm"/><path class="cr6b-0bkb"/><path class="b64tynb4l"/><path class="lum4z6b8t"/></g>`,
		"fallback": "withicons-retro:backpack",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jfrx1wh4a.css';
import '../../css/f/fuguhub6s.css';
import '../../css/y/yoez8wa_m.css';
import '../../css/d/dxj5x8bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jfrx1wh4a wm-shadow"/><path class="fuguhub6s wm-shadow"/><path class="yoez8wa_m"/><path class="dxj5x8bep"/></g>`,
		"fallback": "withicons-brutal:avatar-dog",
	});
}

export default Component;

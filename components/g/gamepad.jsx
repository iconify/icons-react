import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rzr7oyi3g.css';
import '../../css/e/eo_nsxbwf.css';
import '../../css/t/tn9xckn4l.css';
import '../../css/a/ab0m49bfs.css';
import '../../css/w/wzl5hkbyd.css';
import '../../css/a/axzrrmbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rzr7oyi3g wm-shadow"/><path class="eo_nsxbwf"/><path class="tn9xckn4l"/><path class="ab0m49bfs"/><path class="wm-shine wzl5hkbyd"/><path class="axzrrmbfz wm-deco"/></g>`,
		"fallback": "withicons-sticker:gamepad",
	});
}

export default Component;

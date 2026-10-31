import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/asqlutt7r.css';
import '../../css/b/b9yseebrn.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/x/x2uudub6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="asqlutt7r"/><path class="b9yseebrn wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="wm-a x2uudub6d"/></g>`,
		"fallback": "withicons-kawaii:basketball",
	});
}

export default Component;

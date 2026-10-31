import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/asqlutt7r.css';
import '../../css/q/q-dkrzb3u.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/w/we37c7bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="asqlutt7r"/><path class="q-dkrzb3u wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="we37c7bwt wm-a"/></g>`,
		"fallback": "withicons-kawaii:angry",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w41_5bc4c.css';
import '../../css/r/r2why-bng.css';
import '../../css/n/nw-8wvb1t.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/w/w8x39x84j.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w41_5bc4c"/><path class="r2why-bng"/><path class="nw-8wvb1t wm-shine"/><path class="qiyypgbtt wm-k"/><path class="w8x39x84j wm-a"/><path class="wm-deco z5qsc6boq"/></g>`,
		"fallback": "withicons-kawaii:gift",
	});
}

export default Component;

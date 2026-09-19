import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx-u4-b1h.css';
import '../../css/w/wezgfpbuq.css';
import '../../css/a/apw126bpr.css';
import '../../css/h/h5xed7b5b.css';
import '../../css/q/qug1sskqj.css';
import '../../css/y/yzx872mee.css';
import '../../css/m/mdapc0r7d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx-u4-b1h"/><path class="wezgfpbuq"/><path class="apw126bpr"/><path class="h5xed7b5b"/><path class="qug1sskqj"/><path class="yzx872mee"/><path class="mdapc0r7d"/></g>`,
		"fallback": "fluent-emoji-flat:compass",
	});
}

export default Component;

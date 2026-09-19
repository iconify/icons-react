import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fy4qzabou.css';
import '../../css/a/aj92zqy8f.css';
import '../../css/d/dl2_2zbjl.css';
import '../../css/k/koixi_buh.css';
import '../../css/c/csm0443ph.css';
import '../../css/c/c7jtih6yh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fy4qzabou"/><path class="aj92zqy8f"/><path class="dl2_2zbjl"/><path class="koixi_buh"/><path class="csm0443ph"/><path class="c7jtih6yh"/></g>`,
		"fallback": "fluent-emoji-flat:hot-face",
	});
}

export default Component;

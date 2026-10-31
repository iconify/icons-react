import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yiinuyb4t.css';
import '../../css/p/p5yibub1q.css';
import '../../css/g/g9_jhfb4w.css';
import '../../css/q/qn50t2b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yiinuyb4t"/><path class="p5yibub1q wm-shadow"/><path class="g9_jhfb4w"/><path class="qn50t2b4k"/></g>`,
		"fallback": "withicons-brutal:brain-circuit",
	});
}

export default Component;

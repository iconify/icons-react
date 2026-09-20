import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/r1iwxwpgc.css';
import '../../css/f/fh_8iqr2b.css';
import '../../css/q/qpdv9achi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="r1iwxwpgc"/><path class="fh_8iqr2b"/><path class="qpdv9achi"/></g>`,
		"fallback": "reicon:bag-timer",
	});
}

export default Component;

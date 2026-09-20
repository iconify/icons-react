import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqnmyv01r.css';
import '../../css/e/e9vb7gbyc.css';
import '../../css/c/cnfzookvu.css';
import '../../css/i/in5oaybmh.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cqnmyv01r"/><path class="e9vb7gbyc"/><path class="cnfzookvu"/><path class="in5oaybmh"/></g>`,
		"fallback": "streamline-stickies-color:bug-duo",
	});
}

export default Component;

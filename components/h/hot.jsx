import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm3u2eaqh.css';
import '../../css/o/oe4jkhb6c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qm3u2eaqh"/><path class="oe4jkhb6c"/></g>`,
		"fallback": "cryptocurrency-color:hot",
	});
}

export default Component;

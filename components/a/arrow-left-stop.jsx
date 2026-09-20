import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/blyu_090w.css';
import '../../css/q/q2s17uylh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="blyu_090w"/><path class="q2s17uylh"/></g>`,
		"fallback": "lets-icons:arrow-left-stop",
	});
}

export default Component;

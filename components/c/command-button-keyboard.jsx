import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/l/lef99f3qs.css';
import '../../css/o/ob-mf0bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="lef99f3qs"/><path class="ob-mf0bkk"/></g>`,
		"fallback": "streamline-ultimate:command-button-keyboard",
	});
}

export default Component;

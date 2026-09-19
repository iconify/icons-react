import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qnsgm3b_s.css';
import '../../css/n/nuw5dsujc.css';
import '../../css/b/b7dnc5b8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qnsgm3b_s"/><path class="nuw5dsujc"/><path class="b7dnc5b8z"/></g>`,
		"fallback": "icon-park-outline:hospital-three",
	});
}

export default Component;

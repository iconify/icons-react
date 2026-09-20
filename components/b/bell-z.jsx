import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewggps1je.css';
import '../../css/l/l1kafxb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ewggps1je"/><path class="l1kafxb1t"/></g>`,
		"fallback": "tabler:bell-z",
	});
}

export default Component;

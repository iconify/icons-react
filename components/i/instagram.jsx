import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n--ljmbqg.css';
import '../../css/q/q9rcctbns.css';
import '../../css/y/yp79oz0ot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n--ljmbqg"/><path class="q9rcctbns"/><path class="yp79oz0ot"/></g>`,
		"fallback": "icon-park-outline:instagram",
	});
}

export default Component;

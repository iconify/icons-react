import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/b/bbxq5bc9y.css';
import '../../css/o/o8rhxib8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="bbxq5bc9y"/><path class="o8rhxib8o"/></g>`,
		"fallback": "reicon:building2",
	});
}

export default Component;

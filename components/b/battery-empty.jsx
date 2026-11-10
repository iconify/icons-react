import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b56rlac8j.css';
import '../../css/l/lrk8ibamu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b56rlac8j"/><path class="lrk8ibamu"/></g>`,
		"fallback": "andrsrxn:battery-empty",
	});
}

export default Component;

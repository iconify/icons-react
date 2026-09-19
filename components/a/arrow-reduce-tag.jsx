import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6djpsb4t.css';
import '../../css/o/ozipg7bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q6djpsb4t"/><path class="ozipg7bdf"/></g>`,
		"fallback": "iconoir:arrow-reduce-tag",
	});
}

export default Component;

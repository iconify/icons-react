import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcc22nbhq.css';
import '../../css/z/zk348obfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dcc22nbhq"/><path class="zk348obfy"/></g>`,
		"fallback": "andrsrxn:hanger",
	});
}

export default Component;

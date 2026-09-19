import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/klw3-wbdb.css';
import '../../css/j/jyz9dwfex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="klw3-wbdb"/><path class="jyz9dwfex"/></g>`,
		"fallback": "iconoir:flask",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6ua404vp.css';
import '../../css/n/njvh1v2-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="v6ua404vp"/><path class="njvh1v2-q"/></g>`,
		"fallback": "andrsrxn:at",
	});
}

export default Component;

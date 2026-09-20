import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0_qdybbx.css';
import '../../css/e/e4ug6oo-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i0_qdybbx"/><path class="e4ug6oo-t"/></g>`,
		"fallback": "mynaui:cast",
	});
}

export default Component;

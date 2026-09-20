import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j73d8lblm.css';
import '../../css/o/owz2rvb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j73d8lblm"/><path class="owz2rvb7t"/></g>`,
		"fallback": "streamline-freehand-color:currency-bag-bath",
	});
}

export default Component;

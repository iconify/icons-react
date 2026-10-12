import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8a4_1dwt.css';
import '../../css/z/zuk3dc0ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j8a4_1dwt"/><path class="zuk3dc0ts"/></g>`,
		"fallback": "andrsrxn:door-open",
	});
}

export default Component;

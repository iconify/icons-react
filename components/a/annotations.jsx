import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/el-mz0bwb.css';
import '../../css/c/c-g19nkiu.css';
import '../../css/l/lu8-i8bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="el-mz0bwb"/><path class="c-g19nkiu"/><path class="lu8-i8bqf"/></g>`,
		"fallback": "andrsrxn:annotations",
	});
}

export default Component;

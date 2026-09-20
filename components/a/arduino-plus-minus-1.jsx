import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fdnb98b8v.css';
import '../../css/u/u-m6v9beh.css';
import '../../css/e/ezo8joblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fdnb98b8v"/><path class="u-m6v9beh"/><path class="ezo8joblh"/></g>`,
		"fallback": "streamline-freehand-color:arduino-plus-minus-1",
	});
}

export default Component;

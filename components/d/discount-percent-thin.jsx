import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/znzn8ab5o.css';
import '../../css/b/b8-nj7ogf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="znzn8ab5o"/><path class="b8-nj7ogf"/></g>`,
		"fallback": "streamline-freehand-color:discount-percent-thin",
	});
}

export default Component;

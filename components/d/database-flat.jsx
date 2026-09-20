import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8bk0vbyi.css';
import '../../css/b/b1pm1y8oo.css';
import '../../css/j/j7i-4o6fy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z8bk0vbyi"/><path class="b1pm1y8oo"/><path clip-rule="evenodd" class="j7i-4o6fy"/></g>`,
		"fallback": "streamline-color:database-flat",
	});
}

export default Component;

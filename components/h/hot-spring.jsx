import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh-d496ur.css';
import '../../css/o/oj2fc5b5o.css';
import '../../css/x/x9uztkbxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sh-d496ur"/><path class="oj2fc5b5o"/><path class="x9uztkbxu"/></g>`,
		"fallback": "streamline-color:hot-spring",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gd5b7kbxt.css';
import '../../css/w/ws22slbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gd5b7kbxt"/><path class="ws22slbke"/></g>`,
		"fallback": "tdesign:gesture-ranslation",
	});
}

export default Component;

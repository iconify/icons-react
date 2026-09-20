import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyj9e8b7c.css';
import '../../css/l/ljr4u5gnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyj9e8b7c"/><path class="ljr4u5gnt"/></g>`,
		"fallback": "tdesign:cherry",
	});
}

export default Component;

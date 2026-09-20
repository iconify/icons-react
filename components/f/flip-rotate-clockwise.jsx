import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1-ze3uij.css';
import '../../css/a/aqtnw08uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o1-ze3uij"/><path class="aqtnw08uu"/></g>`,
		"fallback": "streamline-freehand-color:flip-rotate-clockwise",
	});
}

export default Component;

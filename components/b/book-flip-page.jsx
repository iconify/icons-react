import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5_dhdc_n.css';
import '../../css/j/jobb8eb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5_dhdc_n"/><path class="jobb8eb1m"/></g>`,
		"fallback": "streamline-freehand-color:book-flip-page",
	});
}

export default Component;

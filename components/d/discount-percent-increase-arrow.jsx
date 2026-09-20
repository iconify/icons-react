import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsff9ohmh.css';
import '../../css/a/anawohban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wsff9ohmh"/><path class="anawohban"/></g>`,
		"fallback": "streamline-freehand-color:discount-percent-increase-arrow",
	});
}

export default Component;

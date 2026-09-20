import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/np890z8oy.css';
import '../../css/w/wc5voqb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="np890z8oy"/><path class="wc5voqb1x"/></g>`,
		"fallback": "tdesign:flag",
	});
}

export default Component;

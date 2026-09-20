import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4yf71bcc.css';
import '../../css/j/jus-31b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4yf71bcc"/><path clip-rule="evenodd" class="jus-31b2j"/></g>`,
		"fallback": "streamline-sharp-color:insert-row-flat",
	});
}

export default Component;

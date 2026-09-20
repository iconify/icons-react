import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5780hbgv.css';
import '../../css/o/o6bdaubba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5780hbgv"/><path clip-rule="evenodd" class="o6bdaubba"/></g>`,
		"fallback": "streamline-color:earth-1-flat",
	});
}

export default Component;

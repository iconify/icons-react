import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-gp3ubnn.css';
import '../../css/i/i81roqrqj.css';
import '../../css/i/iwaim9bcp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-gp3ubnn"/><path clip-rule="evenodd" class="i81roqrqj"/><path clip-rule="evenodd" class="iwaim9bcp"/></g>`,
		"fallback": "streamline-color:information-desk-customer-flat",
	});
}

export default Component;

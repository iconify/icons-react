import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iubb9-b0f.css';
import '../../css/j/jixyg4bqp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iubb9-b0f"/><path clip-rule="evenodd" class="jixyg4bqp"/></g>`,
		"fallback": "streamline-color:business-user-curriculum-flat",
	});
}

export default Component;

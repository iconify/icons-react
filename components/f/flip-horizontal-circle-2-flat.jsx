import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-maz4bnt.css';
import '../../css/h/h5uv5ebmk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j-maz4bnt"/><path clip-rule="evenodd" class="h5uv5ebmk"/></g>`,
		"fallback": "streamline-flex-color:flip-horizontal-circle-2-flat",
	});
}

export default Component;

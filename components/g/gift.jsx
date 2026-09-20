import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcxae1c4f.css';
import '../../css/f/ffd93htpb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rcxae1c4f"/><path class="ffd93htpb"/></g>`,
		"fallback": "streamline-color:gift",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vets3e0qo.css';
import '../../css/c/cl199bc1z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vets3e0qo"/><path clip-rule="evenodd" class="cl199bc1z"/></g>`,
		"fallback": "streamline-color:gift-2-flat",
	});
}

export default Component;

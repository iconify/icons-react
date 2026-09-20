import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggb2lsbur.css';
import '../../css/u/u9max4fwq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggb2lsbur"/><path clip-rule="evenodd" class="u9max4fwq"/></g>`,
		"fallback": "streamline-color:airplane-disabled-flat",
	});
}

export default Component;

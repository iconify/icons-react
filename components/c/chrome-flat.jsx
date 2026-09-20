import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_uqeldvw.css';
import '../../css/g/gxka-n5lz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_uqeldvw"/><path clip-rule="evenodd" class="gxka-n5lz"/></g>`,
		"fallback": "streamline-color:chrome-flat",
	});
}

export default Component;

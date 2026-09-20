import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gd89r1hxn.css';
import '../../css/i/i0e-9r7nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gd89r1hxn"/><path clip-rule="evenodd" class="i0e-9r7nn"/></g>`,
		"fallback": "streamline-sharp-color:cyborg-flat",
	});
}

export default Component;

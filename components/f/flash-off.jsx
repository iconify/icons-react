import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg-cju3dv.css';
import '../../css/j/jerjjgbob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sg-cju3dv"/><path class="jerjjgbob"/></g>`,
		"fallback": "streamline-flex-color:flash-off",
	});
}

export default Component;

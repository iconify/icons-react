import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0kp9n0nz.css';
import '../../css/g/gx0kfqf0b.css';
import '../../css/m/mgh8_7lbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s0kp9n0nz"/><path clip-rule="evenodd" class="gx0kfqf0b"/><path class="mgh8_7lbe"/></g>`,
		"fallback": "streamline-plump-color:heater-flat",
	});
}

export default Component;

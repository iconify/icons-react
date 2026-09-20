import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gj8lzbmus.css';
import '../../css/d/dvg-j-bfl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gj8lzbmus"/><path class="dvg-j-bfl"/></g>`,
		"fallback": "streamline-flex-color:hospital-sign",
	});
}

export default Component;

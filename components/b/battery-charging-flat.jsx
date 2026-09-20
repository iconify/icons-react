import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/couf7jb6c.css';
import '../../css/a/ae_ypkb4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="couf7jb6c"/><path class="ae_ypkb4d"/></g>`,
		"fallback": "streamline-flex-color:battery-charging-flat",
	});
}

export default Component;

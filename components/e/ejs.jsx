import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmi__7-5v.css';
import '../../css/o/o21jc64ou.css';
import '../../css/y/yhktoji6n.css';
import '../../css/r/r6em-vqfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rmi__7-5v"/><ellipse class="o21jc64ou"/><path class="yhktoji6n"/><ellipse class="r6em-vqfz"/></g>`,
		"fallback": "material-icon-theme:ejs",
	});
}

export default Component;

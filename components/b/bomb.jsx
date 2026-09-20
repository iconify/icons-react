import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d893tlfxc.css';
import '../../css/g/gg5vsjb1c.css';
import '../../css/y/yte3hrxwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d893tlfxc"/><path class="gg5vsjb1c"/><path class="yte3hrxwm"/></g>`,
		"fallback": "streamline-cyber-color:bomb",
	});
}

export default Component;

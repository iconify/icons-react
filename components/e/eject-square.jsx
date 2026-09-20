import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hw6vdy-wf.css';
import '../../css/m/mnpd46mej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hw6vdy-wf"/><path class="mnpd46mej"/></g>`,
		"fallback": "streamline-sharp:eject-square",
	});
}

export default Component;

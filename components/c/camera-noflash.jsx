import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qccsvpbeb.css';
import '../../css/a/a2by68ltf.css';
import '../../css/c/csbdrc94y.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="qccsvpbeb"/><path class="a2by68ltf"/><path class="csbdrc94y"/></g>`,
		"fallback": "system-uicons:camera-noflash",
	});
}

export default Component;

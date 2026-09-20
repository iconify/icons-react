import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w3xlxrjal.css';
import '../../css/a/a2by68ltf.css';
import '../../css/d/dk3bnactw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="w3xlxrjal"/><path class="a2by68ltf"/><path class="dk3bnactw"/></g>`,
		"fallback": "system-uicons:camera",
	});
}

export default Component;

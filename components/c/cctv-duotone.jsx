import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oxyvbwr6t.css';
import '../../css/o/on-rl0bcw.css';
import '../../css/q/qx95zxwhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oxyvbwr6t"/><path class="on-rl0bcw"/><path clip-rule="evenodd" class="qx95zxwhr"/></g>`,
		"fallback": "keyline-icons:cctv-duotone",
	});
}

export default Component;

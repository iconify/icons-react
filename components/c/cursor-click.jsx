import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q74hf7f-o.css';
import '../../css/m/muiks8b-r.css';
import '../../css/h/hoiwoabqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q74hf7f-o"/><path clip-rule="evenodd" class="muiks8b-r"/><path class="hoiwoabqv"/></g>`,
		"fallback": "streamline-flex-color:cursor-click",
	});
}

export default Component;

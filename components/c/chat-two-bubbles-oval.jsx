import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfns8qjtd.css';
import '../../css/j/jfy44pbjf.css';
import '../../css/t/ty3lo0b1s.css';
import '../../css/g/gy70glzli.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yfns8qjtd"/><path class="jfy44pbjf"/><path class="ty3lo0b1s"/><path class="gy70glzli"/></g>`,
		"fallback": "streamline-color:chat-two-bubbles-oval",
	});
}

export default Component;

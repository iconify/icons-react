import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5z9h1bev.css';
import '../../css/d/dst7cobom.css';
import '../../css/s/sytfk7bwm.css';
import '../../css/u/uazd6qbsh.css';
import '../../css/j/j_e04r4or.css';
import '../../css/f/f7lm3mb-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w5z9h1bev"/><path class="dst7cobom"/><path class="sytfk7bwm"/><path class="uazd6qbsh"/><path class="j_e04r4or"/><path class="f7lm3mb-h"/></g>`,
		"fallback": "streamline-kameleon-color:captain-shield-duo",
	});
}

export default Component;

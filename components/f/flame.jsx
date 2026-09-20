import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/y-8fig6gi.css';
import '../../css/k/kkoib3uqn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="y-8fig6gi"/><path class="kkoib3uqn"/></g>`,
		"fallback": "system-uicons:flame",
	});
}

export default Component;

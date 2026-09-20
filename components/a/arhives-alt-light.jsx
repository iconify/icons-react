import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sattrcbdg.css';
import '../../css/l/l4rzb5b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="sattrcbdg"/><path class="l4rzb5b2l"/></g>`,
		"fallback": "lets-icons:arhives-alt-light",
	});
}

export default Component;

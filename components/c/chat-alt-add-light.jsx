import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/st72__-bh.css';
import '../../css/b/bo-qhqn4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="st72__-bh"/><path class="bo-qhqn4d"/></g>`,
		"fallback": "lets-icons:chat-alt-add-light",
	});
}

export default Component;

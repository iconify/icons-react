import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfbi3mbkc.css';
import '../../css/v/vs45rqbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfbi3mbkc"/><path clip-rule="evenodd" class="vs45rqbkf"/>`,
		"fallback": "mingcute:government-fill",
	});
}

export default Component;

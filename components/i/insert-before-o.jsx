import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p04435bli.css';
import '../../css/j/jks42ejqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p04435bli"/><path clip-rule="evenodd" class="jks42ejqp"/></g>`,
		"fallback": "gg:insert-before-o",
	});
}

export default Component;

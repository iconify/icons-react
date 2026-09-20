import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1fdoqbye.css';
import '../../css/o/odeyjnk0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1fdoqbye"/><path class="odeyjnk0c"/></g>`,
		"fallback": "reicon:card-pos-filled",
	});
}

export default Component;

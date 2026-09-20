import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yo6rufbce.css';
import '../../css/v/v13x7ob6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yo6rufbce"/><path class="v13x7ob6n"/></g>`,
		"fallback": "reicon:envelope-duotone",
	});
}

export default Component;

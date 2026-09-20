import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ef34079ok.css';
import '../../css/c/c5w-rwbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ef34079ok"/><path clip-rule="evenodd" class="c5w-rwbwt"/></g>`,
		"fallback": "reicon:bell-off",
	});
}

export default Component;

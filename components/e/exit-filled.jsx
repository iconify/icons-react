import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fp2opvbjj.css';
import '../../css/w/w-j-ucchj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fp2opvbjj"/><path class="w-j-ucchj"/></g>`,
		"fallback": "reicon:exit-filled",
	});
}

export default Component;

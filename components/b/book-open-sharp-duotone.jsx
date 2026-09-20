import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwe_uqybk.css';
import '../../css/f/fdeg_urhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwe_uqybk"/><path class="fdeg_urhj"/></g>`,
		"fallback": "keyline-icons:book-open-sharp-duotone",
	});
}

export default Component;

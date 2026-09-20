import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmdl47b5p.css';
import '../../css/c/c41kgs53a.css';
import '../../css/j/jltt4ilue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wmdl47b5p"/><path clip-rule="evenodd" class="c41kgs53a"/><path class="jltt4ilue"/></g>`,
		"fallback": "reicon:accumulator-duotone",
	});
}

export default Component;

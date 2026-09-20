import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uc0yydbxj.css';
import '../../css/t/tcutiwbel.css';
import '../../css/r/racfkwbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uc0yydbxj"/><path class="tcutiwbel"/><path class="racfkwbdc"/></g>`,
		"fallback": "reicon:briefcase5-filled",
	});
}

export default Component;

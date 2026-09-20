import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsf6pqqds.css';
import '../../css/o/om8gfub8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wsf6pqqds"/><path clip-rule="evenodd" class="om8gfub8a"/></g>`,
		"fallback": "reicon:folder-lock-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gehvb3b9i.css';
import '../../css/y/yuw5nvbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gehvb3b9i secondary"/><path class="primary yuw5nvbiz"/></g>`,
		"fallback": "iconaut:git-commit-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/idqvjqexm.css';
import '../../css/u/ubhp5hbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="idqvjqexm secondary"/><path class="primary ubhp5hbui"/></g>`,
		"fallback": "iconaut:file-text-duotone",
	});
}

export default Component;

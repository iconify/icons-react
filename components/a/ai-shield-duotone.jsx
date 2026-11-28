import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_8ex5__f.css';
import '../../css/b/bb-k_fbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_8ex5__f secondary"/><path class="bb-k_fbvs primary"/></g>`,
		"fallback": "iconaut:ai-shield-duotone",
	});
}

export default Component;

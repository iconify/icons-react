import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qs96w4bbe.css';
import '../../css/e/eh36yibok.css';
import '../../css/o/ohgkzfgww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qs96w4bbe"/><path class="eh36yibok"/><path class="ohgkzfgww"/></g>`,
		"fallback": "flowbite:burger-solid",
	});
}

export default Component;

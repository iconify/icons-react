import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwovvpbqy.css';
import '../../css/e/ew8qj307x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iwovvpbqy secondary"/><path class="ew8qj307x primary"/></g>`,
		"fallback": "iconaut:arcade-machine-duotone",
	});
}

export default Component;

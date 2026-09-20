import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ton5smgkd.css';
import '../../css/o/odbq3cchx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ton5smgkd"/><path class="odbq3cchx"/></g>`,
		"fallback": "solar:cloudy-moon-bold-duotone",
	});
}

export default Component;

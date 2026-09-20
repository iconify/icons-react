import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpbathh7a.css';
import '../../css/i/izz8g3byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpbathh7a"/><path class="izz8g3byy"/></g>`,
		"fallback": "solar:copyright-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zpthyibwd.css';
import '../../css/x/x20_kjb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zpthyibwd"/><path class="x20_kjb7x"/></g>`,
		"fallback": "heroicons:home-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y39_gprjq.css';
import '../../css/t/t1auetc5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y39_gprjq"/><path class="t1auetc5f"/></g>`,
		"fallback": "solar:chef-hat-bold-duotone",
	});
}

export default Component;

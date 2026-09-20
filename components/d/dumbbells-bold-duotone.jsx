import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rl7vtub3d.css';
import '../../css/f/fa2mszb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rl7vtub3d"/><path class="fa2mszb2d"/></g>`,
		"fallback": "solar:dumbbells-bold-duotone",
	});
}

export default Component;

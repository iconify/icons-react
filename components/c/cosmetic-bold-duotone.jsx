import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vk-nl1ymc.css';
import '../../css/l/lj69l5bdu.css';
import '../../css/a/ansc4kbhg.css';
import '../../css/s/s4_ob94ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="vk-nl1ymc"/><path class="lj69l5bdu"/></g><path class="ansc4kbhg"/><path class="s4_ob94ry"/></g>`,
		"fallback": "solar:cosmetic-bold-duotone",
	});
}

export default Component;

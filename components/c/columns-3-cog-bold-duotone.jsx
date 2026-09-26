import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz8ra2brm.css';
import '../../css/v/vik802c-d.css';
import '../../css/q/q_s83rbme.css';
import '../../css/o/obh0-9ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rz8ra2brm"/><path class="vik802c-d"/><path class="q_s83rbme"/><path class="obh0-9ban"/></g>`,
		"fallback": "solar:columns-3-cog-bold-duotone",
	});
}

export default Component;

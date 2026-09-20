import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynvhk2btp.css';
import '../../css/k/kjzdoqbce.css';
import '../../css/h/haimesh1v.css';
import '../../css/r/r99dsccbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ynvhk2btp"/><path class="kjzdoqbce"/><path class="haimesh1v"/><path class="r99dsccbt"/></g>`,
		"fallback": "solar:colour-tuning-bold-duotone",
	});
}

export default Component;

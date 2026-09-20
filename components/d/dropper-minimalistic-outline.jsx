import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6pve2s3y.css';
import '../../css/s/s5hlx6soy.css';
import '../../css/m/mp5_upgbq.css';
import '../../css/e/e04kqrbnp.css';
import '../../css/l/lr1ofccoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x6pve2s3y"/><path class="s5hlx6soy"/><path class="mp5_upgbq"/><path clip-rule="evenodd" class="e04kqrbnp"/><path clip-rule="evenodd" class="lr1ofccoy"/></g>`,
		"fallback": "solar:dropper-minimalistic-outline",
	});
}

export default Component;

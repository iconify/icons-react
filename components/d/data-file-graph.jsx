import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8548ccls.css';
import '../../css/j/j9-_k7azr.css';
import '../../css/v/vy1edcjcy.css';
import '../../css/i/i896y_g_v.css';
import '../../css/e/ejenypbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t8548ccls"/><path class="j9-_k7azr"/><path class="vy1edcjcy"/><path class="i896y_g_v"/><path class="ejenypbtq"/></g>`,
		"fallback": "streamline-ultimate-color:data-file-graph",
	});
}

export default Component;

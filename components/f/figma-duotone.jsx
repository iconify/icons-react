import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s975i_r_c.css';
import '../../css/f/fcnb99bqx.css';
import '../../css/x/xtm6vebaa.css';
import '../../css/a/as2ho8ond.css';
import '../../css/m/mff4gkbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s975i_r_c"/><path class="fcnb99bqx"/><path class="xtm6vebaa"/><path class="as2ho8ond"/><path class="mff4gkbdc"/></g>`,
		"fallback": "reicon:figma-duotone",
	});
}

export default Component;

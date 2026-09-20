import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cd54kqbft.css';
import '../../css/o/ojhz1pbpg.css';
import '../../css/g/gurbwkb6n.css';
import '../../css/g/gz30py4vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cd54kqbft"/><path class="ojhz1pbpg"/><path class="gurbwkb6n"/><path class="gz30py4vu"/></g>`,
		"fallback": "solar:container-outline",
	});
}

export default Component;

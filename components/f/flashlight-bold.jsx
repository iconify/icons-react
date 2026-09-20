import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1q0bcchq.css';
import '../../css/o/o9unslmnw.css';
import '../../css/l/lt6ufqbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r1q0bcchq"/><path class="o9unslmnw"/><path clip-rule="evenodd" class="lt6ufqbxy"/></g>`,
		"fallback": "solar:flashlight-bold",
	});
}

export default Component;

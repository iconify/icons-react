import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g81llw5aj.css';
import '../../css/s/shyzrrfnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g81llw5aj"/><path clip-rule="evenodd" class="shyzrrfnp"/></g>`,
		"fallback": "healthicons:death-24px",
	});
}

export default Component;

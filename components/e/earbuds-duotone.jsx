import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g72fr3bto.css';
import '../../css/e/eedn6kblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g72fr3bto"/><path class="eedn6kblj"/></g>`,
		"fallback": "reicon:earbuds-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhl40l22p.css';
import '../../css/b/bgyw8_bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhl40l22p"/><path class="bgyw8_bhp"/></g>`,
		"fallback": "reicon:dropper-duotone",
	});
}

export default Component;

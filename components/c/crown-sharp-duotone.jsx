import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/syvg0141h.css';
import '../../css/i/i_gwh6b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="syvg0141h"/><path class="i_gwh6b9z"/></g>`,
		"fallback": "keyline-icons:crown-sharp-duotone",
	});
}

export default Component;

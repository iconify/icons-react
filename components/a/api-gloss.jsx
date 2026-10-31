import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu71zvknf.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/o/om60bcbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qu71zvknf wm-k"/><circle class="h_tsn8bxt wm-a"/><path class="om60bcbeq wm-shine"/></g>`,
		"fallback": "withicons:api-gloss",
	});
}

export default Component;

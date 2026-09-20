import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ac5s9ccyr.css';
import '../../css/f/fu_tyd8hl.css';
import '../../css/h/httstt_8v.css';
import '../../css/l/ly0fd4b1i.css';
import '../../css/l/lyfl-t8ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ac5s9ccyr"/><path clip-rule="evenodd" class="fu_tyd8hl"/><g clip-rule="evenodd" class="httstt_8v"><path class="ly0fd4b1i"/><path class="lyfl-t8ti"/></g></g>`,
		"fallback": "solar:bicycling-bold-duotone",
	});
}

export default Component;

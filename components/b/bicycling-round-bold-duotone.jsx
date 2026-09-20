import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naktjqyhr.css';
import '../../css/c/cune3rfiq.css';
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
		"content": `<g class="cuyn6tgcc"><path class="naktjqyhr"/><path clip-rule="evenodd" class="cune3rfiq"/><g clip-rule="evenodd" class="httstt_8v"><path class="ly0fd4b1i"/><path class="lyfl-t8ti"/></g></g>`,
		"fallback": "solar:bicycling-round-bold-duotone",
	});
}

export default Component;

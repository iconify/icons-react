import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k84mahbtr.css';
import '../../css/e/eq4cwuu8h.css';
import '../../css/l/lprc-cfsd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k84mahbtr"/><path class="eq4cwuu8h"/><path clip-rule="evenodd" class="lprc-cfsd"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:crown-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/quq1e981h.css';
import '../../css/c/czj4m2brn.css';
import '../../css/r/r4e2oqbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="quq1e981h"/><path clip-rule="evenodd" class="czj4m2brn"/><path class="r4e2oqbkw"/></g>`,
		"fallback": "solar:graph-new-up-outline",
	});
}

export default Component;

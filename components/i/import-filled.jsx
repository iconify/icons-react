import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atuquqb-h.css';
import '../../css/f/fwxskhj1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="atuquqb-h"/><path class="fwxskhj1l"/></g>`,
		"fallback": "reicon:import-filled",
	});
}

export default Component;

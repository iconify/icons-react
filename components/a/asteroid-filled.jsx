import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/amaa_qbvx.css';
import '../../css/u/u2fu2obww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="amaa_qbvx"/><path class="u2fu2obww"/></g>`,
		"fallback": "reicon:asteroid-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6a3bqbtk.css';
import '../../css/k/k0_p16lto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6a3bqbtk"/><path class="k0_p16lto"/></g>`,
		"fallback": "reicon:bitcoin-card-filled",
	});
}

export default Component;

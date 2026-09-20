import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lper9abyn.css';
import '../../css/o/oa01nu_nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lper9abyn"/><path class="oa01nu_nx"/></g>`,
		"fallback": "reicon:frame5-filled",
	});
}

export default Component;

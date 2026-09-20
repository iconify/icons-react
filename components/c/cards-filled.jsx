import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfbv4hbcq.css';
import '../../css/r/r-78m-b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tfbv4hbcq"/><path class="r-78m-b3t"/></g>`,
		"fallback": "reicon:cards-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dise_5b_a.css';
import '../../css/n/n339jbewd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dise_5b_a"/><path class="n339jbewd"/></g>`,
		"fallback": "reicon:copy3-filled",
	});
}

export default Component;

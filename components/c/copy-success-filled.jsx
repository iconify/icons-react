import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n339jbewd.css';
import '../../css/v/vywg-ubtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n339jbewd"/><path class="vywg-ubtr"/></g>`,
		"fallback": "reicon:copy-success-filled",
	});
}

export default Component;

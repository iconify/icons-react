import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/saufwrb4i.css';
import '../../css/k/kia151bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="saufwrb4i"/><path class="kia151bcq"/></g>`,
		"fallback": "reicon:building4-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7h652lyt.css';
import '../../css/r/rp-yo380m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h7h652lyt"/><path class="rp-yo380m"/></g>`,
		"fallback": "reicon:cloud-drop-filled",
	});
}

export default Component;

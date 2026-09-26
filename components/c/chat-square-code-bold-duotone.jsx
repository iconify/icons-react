import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsqk_tbdk.css';
import '../../css/b/b51spkb3i.css';
import '../../css/v/vg-71rbns.css';
import '../../css/c/csnlu8l7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wsqk_tbdk"/><path class="b51spkb3i"/><path class="vg-71rbns"/><path class="csnlu8l7n"/></g>`,
		"fallback": "solar:chat-square-code-bold-duotone",
	});
}

export default Component;

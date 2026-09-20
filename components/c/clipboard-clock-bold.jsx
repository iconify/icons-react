import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0-mqwb2a.css';
import '../../css/d/dih0g1b-s.css';
import '../../css/c/c3lyyzb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s0-mqwb2a"/><path clip-rule="evenodd" class="dih0g1b-s"/><path class="c3lyyzb8p"/></g>`,
		"fallback": "solar:clipboard-clock-bold",
	});
}

export default Component;

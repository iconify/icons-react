import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suz20xhsh.css';
import '../../css/h/hb6ht5nyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="suz20xhsh"/><path class="hb6ht5nyd"/></g>`,
		"fallback": "gg:c-plus-plus",
	});
}

export default Component;

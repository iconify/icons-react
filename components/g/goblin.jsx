import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nldyto_pc.css';
import '../../css/a/axeioj2ci.css';
import '../../css/v/v7qis9w5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nldyto_pc"/><path class="axeioj2ci"/><path class="v7qis9w5c"/></g>`,
		"fallback": "fluent-emoji-high-contrast:goblin",
	});
}

export default Component;

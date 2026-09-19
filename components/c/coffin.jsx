import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/js3edmfgm.css';
import '../../css/t/tn5ieebrc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="js3edmfgm"/><path class="tn5ieebrc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:coffin",
	});
}

export default Component;

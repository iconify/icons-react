import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5g_42bun.css';
import '../../css/b/b0k0uuwhg.css';
import '../../css/n/neqh-tgow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5g_42bun"/><path clip-rule="evenodd" class="b0k0uuwhg"/><path class="neqh-tgow"/></g>`,
		"fallback": "reicon:gallery-wide-filled",
	});
}

export default Component;

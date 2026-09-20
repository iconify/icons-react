import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txlw-y26h.css';
import '../../css/b/bbdy775sr.css';
import '../../css/l/lvbvjwfmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txlw-y26h"/><path clip-rule="evenodd" class="bbdy775sr"/><path class="lvbvjwfmt"/></g>`,
		"fallback": "reicon:crosshairs-off-filled",
	});
}

export default Component;

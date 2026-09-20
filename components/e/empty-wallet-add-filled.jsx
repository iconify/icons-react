import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_v5oac8l.css';
import '../../css/a/a1rwfyb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_v5oac8l"/><path class="a1rwfyb-f"/></g>`,
		"fallback": "reicon:empty-wallet-add-filled",
	});
}

export default Component;

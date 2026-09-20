import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_v9i_btp.css';
import '../../css/a/agfbt6b0b.css';
import '../../css/k/kqzenpjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d_v9i_btp"/><path class="agfbt6b0b"/><path clip-rule="evenodd" class="kqzenpjvg"/></g>`,
		"fallback": "reicon:accessibility",
	});
}

export default Component;

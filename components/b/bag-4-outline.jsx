import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk3rbzozu.css';
import '../../css/x/xz4uev04g.css';
import '../../css/g/g2zm781md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nk3rbzozu"/><path class="xz4uev04g"/><path clip-rule="evenodd" class="g2zm781md"/></g>`,
		"fallback": "solar:bag-4-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wanzsyz5b.css';
import '../../css/w/wqkitrbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wanzsyz5b"/><path class="primary wqkitrbkg"/></g>`,
		"fallback": "iconaut:image-play-duotone",
	});
}

export default Component;

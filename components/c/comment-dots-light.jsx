import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vy9sdxbjj.css';
import '../../css/z/za-_j2fbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="vy9sdxbjj"/><path class="za-_j2fbd"/></g>`,
		"fallback": "iconamoon:comment-dots-light",
	});
}

export default Component;

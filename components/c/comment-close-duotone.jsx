import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g18yl9blq.css';
import '../../css/d/d6exbxbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g18yl9blq"/><path class="d6exbxbaz"/></g>`,
		"fallback": "iconamoon:comment-close-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtiqkbc8z.css';
import '../../css/b/blqzj_bfi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vqf13jwfl.css';
import '../../css/y/yl3cscttg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtiqkbc8z"/><path class="blqzj_bfi"/><g class="jn8qy4bru"><path class="vqf13jwfl"/><path class="yl3cscttg"/></g>`,
		"fallback": "openmoji:butter",
	});
}

export default Component;

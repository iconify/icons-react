import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0hg5zjjc.css';
import '../../css/p/pay9z-wai.css';
import '../../css/c/c95pdnnug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0hg5zjjc"/><path class="pay9z-wai"/><path clip-rule="evenodd" class="c95pdnnug"/>`,
		"fallback": "solar:flashlight-bold",
	});
}

export default Component;

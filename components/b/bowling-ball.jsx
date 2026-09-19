import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfx_ymb-s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfx_ymb-s"/>`,
		"fallback": "fa7-solid:bowling-ball",
	});
}

export default Component;

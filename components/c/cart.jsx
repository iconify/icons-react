import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yui_j73uu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yui_j73uu"/>`,
		"fallback": "icomoon-free:cart",
	});
}

export default Component;

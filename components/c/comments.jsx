import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yld8hwb3k.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yld8hwb3k"/>`,
		"fallback": "fa-solid:comments",
	});
}

export default Component;

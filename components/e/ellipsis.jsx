import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zymh_bb2y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zymh_bb2y"/>`,
		"fallback": "fa6-solid:ellipsis",
	});
}

export default Component;

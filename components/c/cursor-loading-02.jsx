import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fvfti7csj.css';
import '../../css/t/twrxri6al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fvfti7csj"/><path class="twrxri6al"/></g>`,
		"fallback": "hugeicons:cursor-loading-02",
	});
}

export default Component;

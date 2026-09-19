import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg_k29_bd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg_k29_bd"/>`,
		"fallback": "f7:eyedropper-halffull",
	});
}

export default Component;

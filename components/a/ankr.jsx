import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d9vk47bny.css';
import '../../css/d/dh96piwwy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="d9vk47bny"/><path class="dh96piwwy"/></g>`,
		"fallback": "cryptocurrency-color:ankr",
	});
}

export default Component;

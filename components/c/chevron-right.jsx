import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz5w6354e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz5w6354e"/>`,
		"fallback": "entypo:chevron-right",
	});
}

export default Component;

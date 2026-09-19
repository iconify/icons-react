import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk7_07bsp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk7_07bsp"/>`,
		"fallback": "entypo:creative-commons-noncommercial-us",
	});
}

export default Component;

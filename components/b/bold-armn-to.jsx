import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewjnt-fjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewjnt-fjz"/>`,
		"fallback": "ooui:bold-armn-to",
	});
}

export default Component;

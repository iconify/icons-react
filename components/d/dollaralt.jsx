import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzfjqhbaa.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzfjqhbaa"/>`,
		"fallback": "whh:dollaralt",
	});
}

export default Component;

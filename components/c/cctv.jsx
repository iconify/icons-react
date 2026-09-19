import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk3yze2hm.css';

const viewBox = {"width":897,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk3yze2hm"/>`,
		"fallback": "whh:cctv",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psoacabks.css';
import '../../css/w/wtf21ym8u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psoacabks"/><path class="wtf21ym8u"/>`,
		"fallback": "energy-icons:hard-hat-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppzs3erlm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppzs3erlm"/>`,
		"fallback": "whh:gearalt",
	});
}

export default Component;

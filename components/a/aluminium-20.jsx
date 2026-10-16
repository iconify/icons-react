import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytc7x632j.css';
import '../../css/w/wg7cicbcd.css';
import '../../css/j/jd1p-q44e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytc7x632j"/><path class="wg7cicbcd"/><path class="jd1p-q44e"/>`,
		"fallback": "energy-icons:aluminium-20",
	});
}

export default Component;

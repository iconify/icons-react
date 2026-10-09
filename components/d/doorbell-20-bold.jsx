import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj44hh7wm.css';
import '../../css/g/gap1gyb0w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj44hh7wm"/><path class="gap1gyb0w"/>`,
		"fallback": "energy-icons:doorbell-20-bold",
	});
}

export default Component;

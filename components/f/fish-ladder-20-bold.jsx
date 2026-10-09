import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7q9v--5u.css';
import '../../css/u/uefc_6bcp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7q9v--5u"/><path class="uefc_6bcp"/>`,
		"fallback": "energy-icons:fish-ladder-20-bold",
	});
}

export default Component;

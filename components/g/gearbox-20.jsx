import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfsyys30a.css';
import '../../css/h/hti4-6bvb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfsyys30a"/><path class="hti4-6bvb"/>`,
		"fallback": "energy-icons:gearbox-20",
	});
}

export default Component;

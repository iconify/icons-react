import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlocb6bmt.css';
import '../../css/d/dhj1chemz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlocb6bmt"/><path class="dhj1chemz"/>`,
		"fallback": "energy-icons:corner-right-down-20",
	});
}

export default Component;

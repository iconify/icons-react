import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4nvvob8l.css';
import '../../css/d/dcy-hxbol.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4nvvob8l"/><path class="dcy-hxbol"/>`,
		"fallback": "garden:duplicate-stroke-20",
	});
}

export default Component;

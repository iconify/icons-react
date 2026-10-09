import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkpulpb9y.css';
import '../../css/p/p1om3-m6g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkpulpb9y"/><path class="p1om3-m6g"/>`,
		"fallback": "energy-icons:app-window-20-bold",
	});
}

export default Component;

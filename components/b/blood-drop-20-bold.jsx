import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbgf1vj4o.css';
import '../../css/l/ldkcw25ft.css';
import '../../css/j/jv0fgj_2y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbgf1vj4o"/><path class="ldkcw25ft"/><path class="jv0fgj_2y"/>`,
		"fallback": "energy-icons:blood-drop-20-bold",
	});
}

export default Component;

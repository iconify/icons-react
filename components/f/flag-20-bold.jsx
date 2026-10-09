import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtkttskyz.css';
import '../../css/d/d1zhrdbsy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtkttskyz"/><path class="d1zhrdbsy"/>`,
		"fallback": "energy-icons:flag-20-bold",
	});
}

export default Component;

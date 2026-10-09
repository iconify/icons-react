import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjhesdb2l.css';
import '../../css/e/efh5-1q6y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjhesdb2l"/><path class="efh5-1q6y"/>`,
		"fallback": "energy-icons:arrows-vertical-20-bold",
	});
}

export default Component;

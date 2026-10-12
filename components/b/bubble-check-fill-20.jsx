import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng6032t4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng6032t4c"/>`,
		"fallback": "garden:bubble-check-fill-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/limjbxhwx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="limjbxhwx"/>`,
		"fallback": "energy-icons:align-right-20-bold",
	});
}

export default Component;

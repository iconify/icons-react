import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd78yzcxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd78yzcxz"/>`,
		"fallback": "mingcute:badge-cent-fill",
	});
}

export default Component;

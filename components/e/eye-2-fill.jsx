import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nov4dv7hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nov4dv7hi"/>`,
		"fallback": "mingcute:eye-2-fill",
	});
}

export default Component;

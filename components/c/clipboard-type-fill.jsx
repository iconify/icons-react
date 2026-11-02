import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g48p0c9ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g48p0c9ak"/>`,
		"fallback": "mingcute:clipboard-type-fill",
	});
}

export default Component;

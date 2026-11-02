import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr7ozebwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr7ozebwd"/>`,
		"fallback": "mingcute:classify-2-fill",
	});
}

export default Component;

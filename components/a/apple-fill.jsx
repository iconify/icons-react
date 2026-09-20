import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l34h5cbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l34h5cbum"/>`,
		"fallback": "mingcute:apple-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doiajho1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="doiajho1u"/>`,
		"fallback": "mingcute:components-fill",
	});
}

export default Component;

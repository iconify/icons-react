import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9zwy09dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9zwy09dw"/>`,
		"fallback": "keyline-icons:grid-3x2-fill",
	});
}

export default Component;

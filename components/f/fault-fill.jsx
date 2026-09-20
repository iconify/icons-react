import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abrao85rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abrao85rm"/>`,
		"fallback": "mingcute:fault-fill",
	});
}

export default Component;

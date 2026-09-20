import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifw-57x2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ifw-57x2s"/>`,
		"fallback": "mingcute:add-fill",
	});
}

export default Component;

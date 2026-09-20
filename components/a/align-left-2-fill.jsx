import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz261zbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz261zbvi"/>`,
		"fallback": "mingcute:align-left-2-fill",
	});
}

export default Component;

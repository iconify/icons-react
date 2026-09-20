import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a18-ftbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a18-ftbha"/>`,
		"fallback": "mingcute:air-balloon-fill",
	});
}

export default Component;

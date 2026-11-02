import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx71jul5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx71jul5a"/>`,
		"fallback": "mingcute:document-fill",
	});
}

export default Component;

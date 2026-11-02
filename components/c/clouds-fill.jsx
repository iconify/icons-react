import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd041-bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd041-bne"/>`,
		"fallback": "mingcute:clouds-fill",
	});
}

export default Component;

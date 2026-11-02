import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt0n_4ynm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt0n_4ynm"/>`,
		"fallback": "mingcute:image-edit-fill",
	});
}

export default Component;

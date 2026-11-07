import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh4nw25wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vh4nw25wu"/>`,
		"fallback": "solar:heart-outline",
	});
}

export default Component;

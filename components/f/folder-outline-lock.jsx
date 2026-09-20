import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyovs5gvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyovs5gvn"/>`,
		"fallback": "mdi:folder-outline-lock",
	});
}

export default Component;

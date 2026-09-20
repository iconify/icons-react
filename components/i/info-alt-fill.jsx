import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjph0ebny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zjph0ebny"/>`,
		"fallback": "lets-icons:info-alt-fill",
	});
}

export default Component;

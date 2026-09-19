import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb8vjzbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xb8vjzbqp"/>`,
		"fallback": "griddy-icons:filter-alt",
	});
}

export default Component;

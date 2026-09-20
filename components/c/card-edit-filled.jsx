import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efk22ccyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efk22ccyi"/>`,
		"fallback": "reicon:card-edit-filled",
	});
}

export default Component;

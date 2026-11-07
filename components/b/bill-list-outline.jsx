import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhw7bfbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhw7bfbwv"/>`,
		"fallback": "solar:bill-list-outline",
	});
}

export default Component;

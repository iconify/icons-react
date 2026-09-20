import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-7-p6v5b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-7-p6v5b"/>`,
		"fallback": "streamline:block-bell-notification-solid",
	});
}

export default Component;

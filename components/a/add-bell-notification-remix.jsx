import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz84blb1c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kz84blb1c"/>`,
		"fallback": "streamline:add-bell-notification-remix",
	});
}

export default Component;

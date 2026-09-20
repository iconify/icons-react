import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_h731ysk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_h731ysk"/>`,
		"fallback": "streamline-plump:add-bell-notification-remix",
	});
}

export default Component;

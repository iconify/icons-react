import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dncqwk1ss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dncqwk1ss"/>`,
		"fallback": "streamline-plump:add-bell-notification-solid",
	});
}

export default Component;

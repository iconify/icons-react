import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6w_a129j.css';
import '../../css/z/zsup6ib6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6w_a129j"/><path class="zsup6ib6x"/>`,
		"fallback": "streamline-plump:chat-bubble-oval-notification-solid",
	});
}

export default Component;

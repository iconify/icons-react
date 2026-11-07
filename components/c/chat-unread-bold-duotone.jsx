import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b133qtshg.css';
import '../../css/a/aoju1jbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b133qtshg"/><path class="aoju1jbug"/>`,
		"fallback": "solar:chat-unread-bold-duotone",
	});
}

export default Component;

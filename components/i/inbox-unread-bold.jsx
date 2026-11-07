import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b133qtshg.css';
import '../../css/j/jbgenzzof.css';
import '../../css/w/wi7o0k21l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b133qtshg"/><path class="jbgenzzof"/><path class="wi7o0k21l"/>`,
		"fallback": "solar:inbox-unread-bold",
	});
}

export default Component;

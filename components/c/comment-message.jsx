import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjj4o5bfd.css';
import '../../css/q/q9l_p2d0k.css';
import '../../css/l/luprff94i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjj4o5bfd"/><path class="q9l_p2d0k"/><path class="luprff94i"/>`,
		"fallback": "uim:comment-message",
	});
}

export default Component;

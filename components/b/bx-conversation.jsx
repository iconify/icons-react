import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiy8pp_yv.css';
import '../../css/b/b2m7ke2wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiy8pp_yv"/><path class="b2m7ke2wk"/>`,
		"fallback": "bx:bx-conversation",
	});
}

export default Component;

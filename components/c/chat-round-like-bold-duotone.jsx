import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0jc9qlwi.css';
import '../../css/t/tg6_8tb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0jc9qlwi"/><path class="tg6_8tb6w"/>`,
		"fallback": "solar:chat-round-like-bold-duotone",
	});
}

export default Component;

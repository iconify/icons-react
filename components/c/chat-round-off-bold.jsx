import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghj3bdbyn.css';
import '../../css/s/sibe-iawq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghj3bdbyn"/><path class="sibe-iawq"/>`,
		"fallback": "solar:chat-round-off-bold",
	});
}

export default Component;

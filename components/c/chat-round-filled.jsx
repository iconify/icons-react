import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxi53eduq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxi53eduq"/>`,
		"fallback": "reicon:chat-round-filled",
	});
}

export default Component;

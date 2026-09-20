import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pezr6bbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pezr6bbgv"/>`,
		"fallback": "reicon:chat-round-check",
	});
}

export default Component;

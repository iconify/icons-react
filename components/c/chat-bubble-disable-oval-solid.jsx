import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbdr8ifnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbdr8ifnm"/>`,
		"fallback": "streamline-sharp:chat-bubble-disable-oval-solid",
	});
}

export default Component;

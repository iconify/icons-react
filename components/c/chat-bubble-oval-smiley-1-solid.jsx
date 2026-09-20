import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5ezajb2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5ezajb2x"/>`,
		"fallback": "streamline-plump:chat-bubble-oval-smiley-1-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbijfxohp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbijfxohp"/>`,
		"fallback": "streamline:chat-bubble-square-question-remix",
	});
}

export default Component;

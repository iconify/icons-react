import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjc1dvbsw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjc1dvbsw"/>`,
		"fallback": "f7:chat-bubble-text",
	});
}

export default Component;

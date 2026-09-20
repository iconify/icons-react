import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz1l9ignk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tz1l9ignk"/>`,
		"fallback": "lsicon:add-chat-two-filled",
	});
}

export default Component;

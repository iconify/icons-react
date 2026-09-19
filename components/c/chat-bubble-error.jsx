import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve6b9o9st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve6b9o9st"/>`,
		"fallback": "iconoir:chat-bubble-error",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v67rm8qcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v67rm8qcs"/>`,
		"fallback": "ri:chat-smile-ai-3-fill",
	});
}

export default Component;

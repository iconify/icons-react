import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuutoabwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuutoabwp"/>`,
		"fallback": "lineicons:chat-bubble-2",
	});
}

export default Component;

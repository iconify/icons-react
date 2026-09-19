import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz_vtj53w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tz_vtj53w"/>`,
		"fallback": "heroicons:chat-bubble-bottom-center-text-solid",
	});
}

export default Component;

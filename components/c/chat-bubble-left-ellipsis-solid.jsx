import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv1cfib3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bv1cfib3c"/>`,
		"fallback": "heroicons:chat-bubble-left-ellipsis-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyyc1v_5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyyc1v_5u"/>`,
		"fallback": "tdesign:arrow-triangle-down-filled",
	});
}

export default Component;

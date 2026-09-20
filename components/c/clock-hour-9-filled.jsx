import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnd4gkpsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnd4gkpsc"/>`,
		"fallback": "tabler:clock-hour-9-filled",
	});
}

export default Component;

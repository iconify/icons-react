import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3zoptn7o.css';
import '../../css/g/gc83r37zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3zoptn7o"/><path class="gc83r37zp"/>`,
		"fallback": "solar:chat-round-bold-duotone",
	});
}

export default Component;

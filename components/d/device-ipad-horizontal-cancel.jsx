import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at4a6-b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at4a6-b5u"/>`,
		"fallback": "tabler:device-ipad-horizontal-cancel",
	});
}

export default Component;

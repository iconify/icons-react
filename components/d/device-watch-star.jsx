import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aedn4qbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aedn4qbbh"/>`,
		"fallback": "tabler:device-watch-star",
	});
}

export default Component;

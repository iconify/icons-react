import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/godq996fe.css';
import '../../css/w/wxmbpuu5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="godq996fe wm-k"/><path class="wm-a wxmbpuu5a"/>`,
		"fallback": "withicons-bauhaus:arrow-up-right",
	});
}

export default Component;

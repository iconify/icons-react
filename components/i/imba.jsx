import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdzj_9epy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdzj_9epy"/>`,
		"fallback": "file-icons:imba",
	});
}

export default Component;

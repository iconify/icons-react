import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psu7hxbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psu7hxbpi"/>`,
		"fallback": "lucide:hard-drive",
	});
}

export default Component;

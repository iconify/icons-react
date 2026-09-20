import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2k6sbbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2k6sbbgn"/>`,
		"fallback": "lucide:bell-plus",
	});
}

export default Component;

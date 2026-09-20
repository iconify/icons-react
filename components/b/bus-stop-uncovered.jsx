import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytdaeym0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytdaeym0c"/>`,
		"fallback": "mdi:bus-stop-uncovered",
	});
}

export default Component;

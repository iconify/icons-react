import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbc-0cpda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbc-0cpda"/>`,
		"fallback": "mdi:dice-d4",
	});
}

export default Component;

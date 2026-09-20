import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvf96rbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvf96rbpg"/>`,
		"fallback": "mdi:harddisk",
	});
}

export default Component;

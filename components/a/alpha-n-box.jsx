import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz2t82xpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz2t82xpg"/>`,
		"fallback": "mdi:alpha-n-box",
	});
}

export default Component;

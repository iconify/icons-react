import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld6k-wbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld6k-wbdq"/>`,
		"fallback": "mdi:home-sound-out",
	});
}

export default Component;

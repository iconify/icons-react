import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swf6libns.css';
import '../../css/n/nosnhobdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swf6libns"/><path class="nosnhobdg"/>`,
		"fallback": "solar:home-smile-angle-bold-duotone",
	});
}

export default Component;

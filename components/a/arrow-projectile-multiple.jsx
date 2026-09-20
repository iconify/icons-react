import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjk-7-7jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjk-7-7jk"/>`,
		"fallback": "mdi:arrow-projectile-multiple",
	});
}

export default Component;

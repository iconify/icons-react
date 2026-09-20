import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxhz2_bsp.css';
import '../../css/w/wbz7ex9hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxhz2_bsp"/><path class="wbz7ex9hn"/>`,
		"fallback": "token:bsw",
	});
}

export default Component;

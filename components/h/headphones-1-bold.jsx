import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy26aup1d.css';
import '../../css/w/w5x0zccyo.css';
import '../../css/k/kv7e38bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy26aup1d"/><path class="w5x0zccyo"/><path class="kv7e38bui"/>`,
		"fallback": "streamline-ultimate:headphones-1-bold",
	});
}

export default Component;

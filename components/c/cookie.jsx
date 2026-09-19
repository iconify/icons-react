import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuvkzcqcw.css';
import '../../css/k/kff1o6b-x.css';
import '../../css/l/li14_gw7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuvkzcqcw"/><path class="kff1o6b-x"/><path class="li14_gw7p"/>`,
		"fallback": "fxemoji:cookie",
	});
}

export default Component;

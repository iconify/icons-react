import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-c0av85g.css';
import '../../css/r/r1m3whbhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-c0av85g"/><path class="r1m3whbhg"/>`,
		"fallback": "selfhst:domain-locker",
	});
}

export default Component;

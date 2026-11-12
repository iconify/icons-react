import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etg9crbrk.css';
import '../../css/i/ipz9c_5nj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etg9crbrk"/><path class="ipz9c_5nj"/>`,
		"fallback": "selfhst:espconnect-dark",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foflm7r3e.css';
import '../../css/t/tsj3hfbzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foflm7r3e"/><path class="tsj3hfbzj"/>`,
		"fallback": "selfhst:coinmarketcap-blue",
	});
}

export default Component;

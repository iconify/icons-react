import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrjsy3seb.css';
import '../../css/f/fc0sbw29e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrjsy3seb"/><path class="fc0sbw29e"/>`,
		"fallback": "selfhst:cal-com",
	});
}

export default Component;

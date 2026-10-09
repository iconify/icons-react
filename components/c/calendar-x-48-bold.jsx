import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwjkdv1oe.css';
import '../../css/a/ahta2i9-r.css';
import '../../css/w/wy1xwqb_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwjkdv1oe"/><path class="ahta2i9-r"/><path class="wy1xwqb_h"/>`,
		"fallback": "energy-icons:calendar-x-48-bold",
	});
}

export default Component;

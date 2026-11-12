import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbfx2ibbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbfx2ibbq"/>`,
		"fallback": "selfhst:aurral",
	});
}

export default Component;

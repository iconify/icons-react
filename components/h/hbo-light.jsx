import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-_htb_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz-_htb_w"/>`,
		"fallback": "selfhst:hbo-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ep5t2cq.css';
import '../../css/b/btg1i0bdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ep5t2cq"/><path class="btg1i0bdb"/>`,
		"fallback": "selfhst:adobe-dreamweaver",
	});
}

export default Component;

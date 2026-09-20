import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm84comle.css';
import '../../css/l/l2q_0xbvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm84comle"/><path class="l2q_0xbvf"/>`,
		"fallback": "selfhst:adobe-acrobat",
	});
}

export default Component;

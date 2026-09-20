import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgtn_5-hd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgtn_5-hd"/>`,
		"fallback": "selfhst:flohmarkt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv20yacbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv20yacbg"/>`,
		"fallback": "selfhst:countly-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq7-tmb6k.css';
import '../../css/t/tofm4bbmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq7-tmb6k"/><rect class="tofm4bbmh"/>`,
		"fallback": "selfhst:besucherlogin-light",
	});
}

export default Component;

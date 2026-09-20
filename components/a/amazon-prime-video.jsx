import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5-2j9bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5-2j9bts"/>`,
		"fallback": "selfhst:amazon-prime-video",
	});
}

export default Component;

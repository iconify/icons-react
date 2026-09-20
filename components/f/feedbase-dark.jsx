import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs9w5vowg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs9w5vowg"/>`,
		"fallback": "selfhst:feedbase-dark",
	});
}

export default Component;

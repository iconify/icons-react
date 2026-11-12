import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf5la-bxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf5la-bxg"/>`,
		"fallback": "selfhst:habitat-social-light",
	});
}

export default Component;

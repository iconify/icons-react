import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6xfb8lhn.css';
import '../../css/e/ebf-dhbmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6xfb8lhn"/><path class="ebf-dhbmb"/>`,
		"fallback": "selfhst:geeftlist-dark",
	});
}

export default Component;

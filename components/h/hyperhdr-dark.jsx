import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eve3a1jad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eve3a1jad"/>`,
		"fallback": "selfhst:hyperhdr-dark",
	});
}

export default Component;

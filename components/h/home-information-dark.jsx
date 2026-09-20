import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga8f3jbmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga8f3jbmr"/>`,
		"fallback": "selfhst:home-information-dark",
	});
}

export default Component;

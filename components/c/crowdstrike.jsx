import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfv5wi-rx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfv5wi-rx"/>`,
		"fallback": "selfhst:crowdstrike",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg96njcks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg96njcks"/>`,
		"fallback": "selfhst:github",
	});
}

export default Component;

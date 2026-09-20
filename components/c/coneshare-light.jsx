import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od4ok1_9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od4ok1_9d"/>`,
		"fallback": "selfhst:coneshare-light",
	});
}

export default Component;

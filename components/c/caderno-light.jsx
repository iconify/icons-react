import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf-25ebtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf-25ebtr"/>`,
		"fallback": "selfhst:caderno-light",
	});
}

export default Component;

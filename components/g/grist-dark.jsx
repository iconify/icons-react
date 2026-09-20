import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8eptqggo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8eptqggo"/>`,
		"fallback": "selfhst:grist-dark",
	});
}

export default Component;

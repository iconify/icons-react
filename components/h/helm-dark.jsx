import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl818kyew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl818kyew"/>`,
		"fallback": "selfhst:helm-dark",
	});
}

export default Component;

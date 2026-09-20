import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dooibm0ta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dooibm0ta"/>`,
		"fallback": "selfhst:glowstone-dark",
	});
}

export default Component;

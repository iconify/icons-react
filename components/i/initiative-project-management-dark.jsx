import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la7tnabna.css';
import '../../css/w/w7blx8bjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la7tnabna"/><path class="w7blx8bjm"/>`,
		"fallback": "selfhst:initiative-project-management-dark",
	});
}

export default Component;

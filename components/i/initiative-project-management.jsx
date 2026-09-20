import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dee-53fyq.css';
import '../../css/p/pjju7xbqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dee-53fyq"/><path class="pjju7xbqy"/>`,
		"fallback": "selfhst:initiative-project-management",
	});
}

export default Component;

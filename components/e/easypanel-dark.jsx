import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrtb88b6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrtb88b6m"/>`,
		"fallback": "selfhst:easypanel-dark",
	});
}

export default Component;

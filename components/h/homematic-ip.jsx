import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqm2u1pft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqm2u1pft"/>`,
		"fallback": "selfhst:homematic-ip",
	});
}

export default Component;

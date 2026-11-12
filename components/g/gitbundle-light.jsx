import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdtm0qhix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdtm0qhix"/>`,
		"fallback": "selfhst:gitbundle-light",
	});
}

export default Component;
